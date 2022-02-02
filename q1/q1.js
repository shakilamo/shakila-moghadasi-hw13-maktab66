$(document).ready(function(){
    $(".add-row").click(function(){
        var markup = `<tr>
        <td>
            <button class='btn btn-danger col-5 delete' name='Delete' type='submit'>Delete</button>
            <button class='btn btn-primary col-5 Clone' name='Clone' type='submit'>Clone</button>
        </td>
        <td>
            <input type='text' class='form-control number'>
        </td> 
        <td>
            <input type='text' class='form-control type'>
        </td>
        <td>
            <div  class='row ms-0 me-0 font-size'>
                <label class='row col-3'>
                <input type='radio' class='col-6'>
                <p class='col-6 ps-0'><small>New</small></p>
                </label>
                <label class='row col-5 ms-0'>
                <input type='radio' class='col-3'>
                <p class='col-7 ps-0'><small>in progress</small></p>
                </label>
                <label class='row col-4 ps-0'>
                <input type='radio' class='col-6'>
                <p class='col-6 ps-0'><small>confirmed</small></p>
                </label>
            </div>
        </td>
        </tr>`;
        $("table tbody").append(markup);
    });
    $('table tbody').on('click', '.delete', function () {
        var child = $(this).closest('tr').nextAll();
        child.each(function () {
          });
          $(this).closest('tr').remove();
        });

        $('table tbody').on('click', '.Clone', function () {
            var child = $(this).closest('tr').nextAll();
            child.each(function () {
              });
            var number = $(".number").val();
            var type = $(".type").val();
            var markup = "<tr><td></td><td>" +
            number + "</td><td>" + type + "</td><td>" + "" +"</td></tr>";
            $("table tbody").append(markup);
    });    
});