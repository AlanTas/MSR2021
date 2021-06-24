class WelcomeController
{
    public function createSession(Request $request)
    {
        return view('welcome');
    }

    public function storeSession(Request $request)
    {
        //$request->session()->put('srcode','data.usr_name');

        //Store the usr_name value from data received via (Post) ajax request
        $request->session()->put('srcode',$request->usr_name);
        echo "Session stored.";
        
        return 1;
    }
}
