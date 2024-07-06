"use client";

function Breadcrumb({name}) {
    return(
        <section class="bradcrumb-area page-background">
            <div class="container">
               <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div class="bradcrumb-box text-center">
                        <h1>{name}</h1>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}

export default Breadcrumb;