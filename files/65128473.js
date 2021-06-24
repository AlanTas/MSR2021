this.http.get(`/update`).pipe(
  timestamp(),
  switchMap(({ timestamp, value }) =>
    concat(
      of(value),
      EMPTY.pipe(delay(timeToNextHourInMs(timestamp)))
    )
  ),
  repeat()
);

const RETRY_DELAY = 2000;
const MAX_RETRY_FOR_ONE_HTTP_CALL = 3;

const automaticRetry = () => (obs$) =>
  obs$.pipe(
    retryWhen((error$) =>
      error$.pipe(
        concatMap((error, index) =>
          iif(
            () => index >= MAX_RETRY_FOR_ONE_HTTP_CALL,
            throwError(error),
            of(error).pipe(delay(RETRY_DELAY))
          )
        )
      )
    )
  );

this.http.get(`/update`).pipe(
  automaticRetry(),
  timestamp(),
  switchMap(({ timestamp, value }) =>
    concat(
      of(value),
      EMPTY.pipe(delay(timeToNextHourInMs(timestamp)))
    )
  ),
  repeat()
);
