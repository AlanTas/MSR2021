<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <table border='0' width='100%'>
        <tr >
            <td width="20%"  class="bold">Status 1:</td>
            <td><select name="status1" id="status1"><option value="null">select:</option>
                </select>
            </td>
            <!--I want to hide the next 3 tds on some condition-->
            <td class="status2" colspan="2">&#160;</td>
            <td class="bold status2">status 2:</td>
            <td class="status2"><select>
                    <option value="null">select</option>
                    <option value="SV">V - 1</option>
                    <option value="SK">V - 2</option>
            </select></td>
        </tr>
        <tr id="status3">
            <td width="20%" class="bold">Status 3:</td>
            <td><select>
                    <option value="null">select</option>
                    <option value="SV">V - 3</option>
                    <option value="SK">V - 4</option>
                </select>
            </td>
        </tr>
    </table>