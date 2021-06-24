FUNCTION elementReplace(arr, obj)
  result <- []
  FOR elemKey in arr DO:
     IF elemKey is a key of obj THEN:
       push obj[elemKey] to result
     ELSE:
       push elemKey to result
     END IF
  END FOR
END FUNCTION
