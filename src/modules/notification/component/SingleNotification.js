import React from "react";


const SingleNotification = () => {
  return (
    <div
      style={{
        border: "0.5px solid #E0E0E0",
      }}
      className=" bg-white py-4 px-2 px-md-2 px-lg-4 "
    >
      <div className="d-flex flex-column flex-md-row justify-content-between notification-box">
        <div className="d-flex ">
          <div className="box-div me-3">
            {/* <img src={box} alt="" /> */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.072 3.05416L19.294 8.72016L14 10.9882L0.854 5.35416C1.15 5.05216 1.512 4.80816 1.924 4.65016L6.072 3.05416ZM8.748 2.02616L11.848 0.83416C13.2339 0.301374 14.7681 0.301374 16.154 0.83416L26.078 4.65016C26.488 4.81016 26.85 5.05016 27.146 5.35416L21.834 7.63016L8.748 2.02616ZM27.988 7.17016L15 12.7362V27.6362C15.3943 27.5697 15.7809 27.4638 16.154 27.3202L26.078 23.5022C26.6438 23.2843 27.1303 22.9002 27.4734 22.4003C27.8165 21.9005 28.0001 21.3084 28 20.7022V7.45016C28.0004 7.35664 27.9957 7.26317 27.986 7.17016H27.988ZM13 27.6362V12.7362L0.0139999 7.17016C0.00498694 7.26323 0.000315266 7.35666 0 7.45016V20.7022C8.0285e-05 21.3087 0.183985 21.9009 0.527462 22.4008C0.870939 22.9006 1.35786 23.2846 1.924 23.5022L11.846 27.3202C12.222 27.4642 12.608 27.5702 13 27.6362Z" fill="#EB5757"/>
</svg>

          </div>
          <div>
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold">Low Inventory</h5>
            </div>
            <p>
              Your Inventory is Too <span className="fw-bold">Low</span>. Please
              Support multiple stocking, distribution locations and tiers
            </p>
          </div>
        </div>

        <div className="d-flex align-content-start ">
          <div className="mx-2">
            {/* <img src={time} alt="" /> */}
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_8)">
<path d="M12 21.0781C16.9706 21.0781 21 17.0487 21 12.0781C21 7.10756 16.9706 3.07812 12 3.07812C7.02944 3.07812 3 7.10756 3 12.0781C3 17.0487 7.02944 21.0781 12 21.0781Z" stroke="#828282" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M12 6.82812V12.0781H17.25" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_22_8">
<rect width="24" height="24" fill="white" transform="translate(0 0.078125)"/>
</clipPath>
</defs>
</svg>

          </div>

          <p>March 30, 2020, 10:05 am</p>
          <div className="cross">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.41893 8.08293C9.80986 8.47404 9.80986 9.10594 9.41893 9.49706C9.22392 9.69206 8.96794 9.79002 8.71178 9.79002C8.4558 9.79002 8.19981 9.69206 8.00481 9.49706L4.99986 6.49193L1.99492 9.49706C1.79991 9.69206 1.54393 9.79002 1.28795 9.79002C1.03178 9.79002 0.775803 9.69206 0.580795 9.49706C0.189865 9.10594 0.189865 8.47404 0.580795 8.08293L3.58592 5.07799L0.580795 2.07304C0.189865 1.68193 0.189865 1.05003 0.580795 0.65892C0.971909 0.26799 1.60381 0.26799 1.99492 0.65892L4.99986 3.66405L8.00481 0.65892C8.39592 0.26799 9.02782 0.26799 9.41893 0.65892C9.80986 1.05003 9.80986 1.68193 9.41893 2.07304L6.4138 5.07799L9.41893 8.08293Z" fill="#FFFDFC"/>
</svg>

            {/* <img src={x} alt="" /> */}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SingleNotification;
