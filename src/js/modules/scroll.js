export default function scrollWrapper(wrapperSelector, startDelta) {
    const wrapper = document.querySelector(wrapperSelector),
        height = document.documentElement.clientHeight;
    if (document.documentElement.clientHeight > 600 && document.documentElement.clientWidth > 992) {
        function changeSlide(count) {
            wrapper.style.transform = `translateY(-${height * count / 100}px)`;
        }
        changeSlide(startDelta - 100)
        let enable = true;
        window.addEventListener("wheel", (e) => {
            if (!enable) return;
            enable = false;
            if (e.deltaY > 0) {
                startDelta += 100;
      
            } else {
                startDelta -= 100;
            }
        

        
            if (startDelta > 0 && startDelta < 400) {
                changeSlide(startDelta - 100);
            } else if (startDelta == 0) {
                startDelta = 100;
            } else if (startDelta == 400) {
                startDelta = 300
            }
            setTimeout(() => enable = true, 1000);
  
        });
    } else {
        wrapper.style.height = "auto"
        document.body.style.overflow="auto"
    }
        
   
  
    }

  
