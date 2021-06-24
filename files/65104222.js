import asyncio as aio

async main():
    ev = aio.Event()

    def cb(ackdata):
       print(1)
       print(2)
       ev.set()

    await socketio.emit("eventname",data,callback=cb)
    await ev.wait()
    print(3)
