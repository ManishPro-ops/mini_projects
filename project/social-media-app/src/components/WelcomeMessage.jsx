import React from "react";

const WelcomeMessage = (
    // {onGetPostClicked}
) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">There are no post's!</h1>
      <div className="col-lg-6 mx-auto">
        
        <p className="lead mb-4">
          quickly upload one and get others know about how are you feeling today :)
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          
          {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3"
            // onClick={onGetPostClicked}
          >
            Fetch post's from server
          </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
