<application
  android:name=".MainApplication"
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
  android:allowBackup="false"
  android:theme="@style/AppTheme"
 >   
  <activity
     android:name=".MainActivity"
    android:label="@string/app_name"
android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
   android:launchMode="singleTask"
   android:windowSoftInputMode="adjustResize">
   <intent-filter>
     <action android:name="android.intent.action.MAIN" />
     <category android:name="android.intent.category.LAUNCHER" />
   </intent-filter>
 </activity>
 <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
 <meta-data android:name="android:name="com.google.android.geo.API_KEY""
  android:value="AIzaSyDPUc0RSV5OZzACrJcFPuBpxUHi0000000" />
 </application>
