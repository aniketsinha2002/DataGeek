
    const BackToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"  // set "smooth" for smooth scrolling
    });

    }
    
    <div className="px-4 pb-4 pt-0 fixed-bottom d-flex justify-content-end">
        <button type="button" className="btn btn-primary rounded-5" style={{border: "#0a4498 solid 2px" }} onClick={BackToTop} >Back To Top!!!!!!!!!!!!!!!</button>
    </div>


