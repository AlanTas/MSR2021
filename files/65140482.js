<div id="scroll-container" @onmousewheel="MouseWheelEventHandler" @onwheel="MouseWheelEventHandler">
    [...]
</div>

@code 
{
    private async Task MouseWheelEventHandler()
    {
        System.Console.WriteLine("Scroll");
    }
}
