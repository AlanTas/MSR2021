<!doctype html>
<html xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="UTF-8">
        <title>Demo</title>
        <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
        <link rel="stylesheet" type="text/css" href="https://datatables.net/media/css/site-examples.css">

        <style>
            .dataTables_paginate {
                float: left !important;
            }
        </style>
    </head>

    <body>

        <div style="margin: 20px; width: 150px;">
            <table id="table_id">
                <thead>
                    <tr>
                        <td>Users</td>
                    </tr>
                </thead>
                <tbody>
                    <tr th:each="info : ${userInfo}">
                        <td>
                            <p th:text=${info.name}></p>
                            <p th:text=${info.dob}></p>                                     
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <script type="text/javascript">
            $(document).ready(function () {
                $('#table_id').DataTable({
                    "dom": "tp",
                    "ordering": false,
                    "pagingType": "simple",
                    "lengthMenu": [ 1 ]
                });
            });
        </script>

    </body>
</html>
