const init = () => {
    $("#btn_upload").on("click" , ()=>{
            upload_data();
      });
}
const upload_data = () =>{
    let frm = document.getElementById("frm_data");
    let data  = new  FormData(frm);
    data.append("accion" , "report");
    $.ajax({
        type:'POST',
         url:'../controllers/reports.php',
         data:data,
         processData: false,
         contentType: false,
         success:(rps)=>{

            let datos = JSON.parse(rps);
            if (datos.status){
                
                swal("Atención", datos.msg, "success");

            } 
            else {
                swal ("Atención", datos.msg, "success");
            };
            
             
         }
    });
}
init();
