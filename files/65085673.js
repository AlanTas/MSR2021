<MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              autoOk={true}
              variant='inline'
              inputVariant='outlined'
              format={dateFormat}
              fullWidth
              name='expirationDate'
              value={expirationDate}
              onChange={ (date) => handleChangeDate(date)}
              placeholder={dateFormat}
              size='small'
              disableFuture={true}
              views={['date', 'month', 'year']}
              maxDate={today.setDate(today.getDate() - 1)}
            />
          </MuiPickersUtilsProvider>
