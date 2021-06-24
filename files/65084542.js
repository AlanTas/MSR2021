<table id="showdata">
    <tr>
        <th>Room1</th>
        <th>Room2</th>
        <th>Room3</th>
    </tr>
    <tr>
        <td v-for="(x, key) in ['Room1', 'Room2', 'Room3']" :key="key" >
            <table>
                <tr v-for="(detail, key) in roomDetail.filter(({ room }) => room === x)" :key="key" >
                    <td>{{ detail.time }}</td>
                    <td>{{ detail.name }}</td>
                    <td>{{ detail.status }}</td>
                    <td>{{ detail.room }}</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
