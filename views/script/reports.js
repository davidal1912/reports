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
             console.log(rps);
         }
    });
}
init();
