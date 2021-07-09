const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const affectedInput = document.getElementById('affected')
const deathInput = document.getElementById('death')
const curedInput = document.getElementById('cured')
const testedInput = document.getElementById('tested')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'covidUpdate2.jpg'
image.onload = function(){
      drawImage()

}

    

    function drawImage(){
        ctx.drawImage(image, 0, 2,canvas.width,canvas.height)
        ctx.strokeStyle = "blue";
        ctx.moveTo(155, 400);
        ctx.lineTo(155, 400);
        ctx.stroke(); 
        
        ctx.font = '60px Shorif Ador Bijoy52'
        ctx.fillStyle='#FFD700'
        ctx.textAlign = "center"; 
        ctx.fillText(affectedInput.value, 155, 400)

        ctx.moveTo(415, 400);
        ctx.lineTo(415, 400);
        ctx.stroke(); 
        ctx.textAlign = "center"; 
        ctx.fillText(deathInput.value, 415, 400)
        

        ctx.moveTo(663, 400);
        ctx.lineTo(663, 400);
        ctx.stroke(); 
        ctx.textAlign = "center"; 
        ctx.fillText(curedInput.value, 678, 400)
        

        ctx.moveTo(945, 400);
        ctx.lineTo(945, 400);
        ctx.stroke(); 
        ctx.textAlign = "center"; 
        ctx.fillText(testedInput.value, 939, 400)
        }
    affectedInput.addEventListener('input',function(){
        drawImage()
    })
    deathInput.addEventListener('input',function(){
        drawImage()
    })
    curedInput.addEventListener('input',function(){
        drawImage()
    })
    testedInput.addEventListener('input',function(){
        drawImage()
    })

    

downloadBtn.addEventListener('click', function(){
   downloadBtn.href = canvas.toDataURL()
   downloadBtn.download = true
})