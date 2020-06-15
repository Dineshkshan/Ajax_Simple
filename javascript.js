const url = 'http://localhost:5000'
$(document).ready(function () {
    $('#button').click(function () {
        $('.insert').hide(),
        $('.update').hide(),
        $('.delete').hide(),
            $('#value').show().empty(),
            $.ajax({
                url: url + '/getdetails',
                type: 'GET',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (details) {
                    console.log(details);
                    $.each(details, function (i, detail) {
                        $('#value').append('<p> id:' + detail.id + ',EmployeeName:' + detail.EmployeeName + ',Projectname:' + detail.ProjectName + ',Place:' + detail.place + '</p>')
                    });
                }
            });
    });
    $('#button1').on('click', function () {
        $('#value').hide(),
        $('.update').hide(),
        $('.delete').hide(),
        $('.insert').show().css('visibility', 'visible')
    });
    $('#post').click(function () {
        var datavalues = {
            EmployeeName: $('#emp').val(),
            ProjectName: $('#pname').val(),
            place: $('#place').val(),
        };
        var stringdata = JSON.stringify(datavalues);
        $.ajax({
            url: url + '/insertdetails',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: stringdata,
            success: function (results) {
                console.log("Employee inserted successfully");
            },
            error: function (error) {
                console.log("Error in inserting the details");
            }
        });
    });
    $('#button2').on('click', function () {
        $('#value').hide(),
        $('.update').show().css('visibility', 'visible'),
        $('.delete').hide(),
        $('.insert').hide()
    });
    $('#update').on('click',function(){
        var id=$('#id').val();
        var data={
            EmployeeName:$('#emp1').val(),
            ProjectName:$('#pname1').val(),
            place:$('#place1').val(),
        };
        $.ajax({
            url:url+'/updatedetails/'+id,
            type:'PUT',
            dataType:'json',
            contentType: "application/json; charset=utf-8",
            data:JSON.stringify(data),
            success:function(results)
            {
                console.log("Employee updated Successfully");
            },
            error:function()
            {
                console.log("Error in Updating the details");
            }            
        });
    });
    $('#button3').on('click',function(){
        $('#value').hide();
        $('.insert').hide();
        $('.update').hide();
        $('.delete').show().css('visibility','visible');
     });
     $('#delete').on('click',function()
     {
         var id=$('#id1').val();
         $.ajax({
             url:url+'/deletedetails/'+id,
             type:'DELETE',
             dataType:'json',
             contentType:"application/json; charset=utf-8",
             success:function(results)
             {
                 console.log("Employee deleted Successfully");
             },
             error:function()
             {
                 console.log("Error in Deleting Successfully");
             }
         })
     })
});