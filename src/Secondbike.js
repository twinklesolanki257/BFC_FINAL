import rc1 from "./ktmrcorange.webp"
import rc2 from "./ktmrcblack.webp"
import rc3 from "./ktmcrcsilver.webp"

const Secondbike = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = rc2;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = rc3;
    }
    return (
        <>
            <div>
                <div className="containerr">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">

                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={rc1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={rc2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={rc3} /></div>

                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={rc1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay} src={rc2} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={rc3} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">KTM RC 200</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span> 2,14,694</span></h4>

                                    <h5 class="colors">Colors:
                                        <span className="color orange2" data-toggle="tooltip" title="Not In store"></span>
                                        <span className="color black2"></span>
                                        <span className="color silver2"></span>
                                    </h5>
                                    <div className="action">
                                        {/* <button className="buy-now btn btn-default" type="button"><a href="./checkout">Buy Now</a></button> */}
                                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="bg-light border-top py-4">
                    <div class="container">
                        <div class="row gx-4">
                            <div class="col-lg-8 mb-4">
                                <div class="border rounded-2 px-3 py-2 bg-white">

                                    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                        <li class="nav-item d-flex" role="presentation">
                                            <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Summary</a>
                                        </li>
                                        <li class="nav-item d-flex" role="presentation">
                                            <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false"> Specification</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content" id="ex1-content">
                                        <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                            <p>
                                                The KTM RC 200 is a sports bike available at a price range of Rs. 2,43,802 - Rs. 2,51,725 in India. It comes in 2 variants and 3 colours. It is powered by a 199.5cc BS6 engine and has a expert reported mileage of 43.5kmpl. With both front and rear disc brakes, the KTM RC 200 comes with anti-locking braking system. The RC 200 bike weighs 160kg and has a fuel tank capacity of 13.7 liters. It develops a power output of 24.6bhp and a torque of 19.2Nm.

                                                Price: KTM RC 200 price for its variant - RC 200 GP Edition starts at Rs. 2,43,802. The price for the other variant - RC 200 Standard is Rs. 2,51,725. The mentioned RC 200 prices are the on-road price of Bhopal.



                                                After keeping it majorly unchanged for seven years, KTM has finally bestowed the RC 200 with its biggest ever update this year. All these changes promise to make it friendlier and more accessible while keeping the excitement intact.

                                                The most prominent change is in the design department. The motorcycle now looks bigger, more mature, and less sharp than the previous bike. It also gets a new LED headlamp set up along with an LCD console that looks like the same unit we have seen on the new 250 Duke. Even the turn blinkers are now mounted on the fairing. Furthermore, the fuel tank is a larger 13.7-litre unit, as opposed to the previous bike’s 9.5-litre fuel tank.

                                                As for the hardware, the new RC 200 is based on a split-type trellis frame with a bolted-on sub-frame, which is a departure from the outgoing bike. Moreover, the brakes and wheels are lighter for saving weight. Other hardware changes include a new WP Apex monoshock and fully adjustable handlebar risers for tweaking its ergonomics.

                                                The 25.4bhp, 199.5cc, liquid-cooled engine of the KTM RC 200 has remained majorly unchanged. However, there’s a new larger airbox for allowing better air flow thereby making the bike more responsive and torquey. The heating should also be better managed with a new curved radiator assembly. Lastly, KTM has made sure the new RC 200 is comfier and more spacious to ride.

                                                The 2022 KTM RC 200 is available in two colour options including Dark Galvano and Silver Metallic. The motorcycle competes against the new Yamaha YZF R15 V4.                           </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - WP APEX 43</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - WP APEX - Monoshock</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Transmission - 6 Speed Manual</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - Dual Channel ABS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Fuel Delivery System - Fuel Injection</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Spark Plugs - 1 Per Cylinder</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Ignition - CDI</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type - Disc</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - 2 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Transmission - 6 Speed Manual</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Gear Shifting Pattern - 1 Down 5 Up</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Standard Warranty - 30000 Km</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Additional Features - Fully Adjustable Handlebar</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2" id="ex1-pills-2">
                                                <tr>
                                                    <th class="py-2">Engine Capacity</th>
                                                    <td class="py-2">199.5 cc</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Max Power</th>
                                                    <td class="py-2">24.6 bhp @ 10000 rpm</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mileage - ARAI</th>
                                                    <td class="py-2">43.5 kmpl</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">479.5 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">140 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission Type</th>
                                                    <td class="py-2">Chain Drive</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Tank Capacity</th>
                                                    <td class="py-2">13.7 litres</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Petrol</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Emission Standard</th>
                                                    <td class="py-2">BS6</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Clutch</th>
                                                    <td class="py-2">Wet Multiplate</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Cooling System</th>
                                                    <td class="py-2">Liquid Cooled</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="px-0 border rounded-2 shadow-0">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Variants</h5>
                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        RC 200 GP Edition

                                                    </a>
                                                    <strong class="text-dark"> ₹ 2,14,694</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        RC 200 Standard

                                                    </a>
                                                    <strong class="text-dark">₹ 2,18,179</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}
export default Secondbike;