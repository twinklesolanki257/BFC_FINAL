import kartos1 from "./kartoswhite.webp";
import kartos2 from "./kartosgrey.webp";
import kartos3 from "./kartosred.webp";
import kartos4 from "./kartosblue.webp";
import kartos5 from "./kartosblack.webp";

const Secondelectric = () => {
    const mydisplay = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kartos1;
    }
    const mydisplay1 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kartos2;
    }
    const mydisplay2 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kartos3;
    }
    const mydisplay3 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kartos4;
    }
    const mydisplay4 = () => {
        let myobj = document.getElementById("myimg");
        myobj.src = kartos5;
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
                                        <div className="tab-pane active" id="pic-1"><img src={kartos1} id="myimg" /></div>
                                        <div className="tab-pane" id="pic-2"><img src={kartos2} /></div>
                                        <div className="tab-pane" id="pic-3"><img src={kartos3} /></div>
                                        <div className="tab-pane" id="pic-4"><img src={kartos4} /></div>
                                        <div className="tab-pane" id="pic-5"><img src={kartos5} /></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onMouseEnter={mydisplay} src={kartos1} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img onMouseEnter={mydisplay1} src={kartos2} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img onMouseEnter={mydisplay2} src={kartos3} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay3} src={kartos4} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img onMouseEnter={mydisplay4} src={kartos5} /></a></li>
                                    </ul>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">Tork Kratos R</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <h4 className="price">Current Price: <span>₹ 1,86,188</span></h4>

                                    <h5 class="colors">Colors:
                                        <span className="color white" data-toggle="tooltip" title="Not In store"></span>
                                        <span className="color black"></span>
                                        <span className="color red"></span>
                                        <span className="color blue"></span>
                                        <span className="color grey"></span>
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
                                                Tork Kratos R price for its variant - Kratos R Urban starts at Rs. 1,86,188. The price for the other variant - Kratos R Standard is Rs. 2,07,403. The mentioned Kratos R prices are the on-road price of Bhopal.

                                                Tork Kratos R is an electric street bike available in 2 variants and 5 colours. Tork Kratos R generates 4000 W power from its motor. With both front and rear disc brakes, Tork Kratos R comes up with combined braking system of both wheels.

                                                Tork Motors has launched the new Kratos electric motorcycle in the Indian market to rival the likes of Revolt RV400. The new Tork Kratos will be sold in two variants – Standard and R and will be available across India in a phased manner.
                                                The Tork Kratos features a naked roadster styling that is complemented by a triangular-shaped headlight, split-type seat, and two-piece pillion grab rails. The base model is available in a white colour option while the R variant is listed in four choices – white, blue, red, and black.

                                                The electric motor on the base model makes a peak power output of 7.5kW or 10.05bhp and a maximum torque of 28Nm. The R variant, on the other hand, makes a relatively higher power output of 9kW or 12.06bhp and peak torque of 38Nm. The 0-40kmph acceleration time for the base model is four seconds while its maximum speed is rated at 100kmph. The R variant boasts a top speed of 105kmph and a 0-40kmph acceleration time of 3.5 seconds.

                                                The 4kWH, IP67 certified, lithium-ion battery pack on both variants is claimed to deliver an IDC (Indian Driving Cycle) range of 180km. The company claims a real-life range of 120km per charge for both motorcycles. The R variant also benefits from fast charging capabilities, and Tork Motors claims 0-80 per cent recharging in one hour.

                                                Standard features on both variants include full-LED lighting, a fully-digital instrument cluster, multiple ride modes, regenerative braking, reverse mode, mobile connectivity, USB charging, anti-theft, front storage box, and OTA updates among others. The premium R variant further benefits from fast charging, free access to the charging network for two years, geofencing, find my vehicle, motor walk assist, crash alert, track mode, and smart charge analysis.

                                                The motorcycle is built around a steel trellis frame that uses the battery pack as a stressed member. The suspension duties are handled by telescopic front forks and a rear mono-shock. The anchoring power comes from single discs on both ends while the safety net includes CBS tech.    </p>
                                            <div class="row mb-2">
                                                <div class="col-12 col-md-6">
                                                    <ul class="list-unstyled mb-0">
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Suspension - Hydraulic Telescopic Fork</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Rear Suspension - Mono Shock Hydraulic</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Braking System - CBS</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Front Brake Type -Disc</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Carrying Capacity - 150kg</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Charger Output - 750W</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-md-6 mb-0">
                                                    <ul class="list-unstyled">
                                                        <li><i class="fas fa-check text-success me-2"></i>Battery Warranty - Whichever comes earlier 40000 km or 3 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Motor Warranty - Whichever comes earlier 40000 km or 3 Year</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Tyre Type -Tubeless</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Portable Battery - No</li>
                                                        <li><i class="fas fa-check text-success me-2"></i>Kerb Weight - 140Kg</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <table class="table border mt-3 mb-2">

                                                <tr>
                                                    <th class="py-2">Rated Power</th>
                                                    <td class="py-2">4000W</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Charging Time</th>
                                                    <td class="py-2">6-7 Hrs</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Speedometer</th>
                                                    <td class="py-2">Digital</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Riding Range</th>
                                                    <td class="py-2">180 Km</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Top Speed</th>
                                                    <td class="py-2">70 Kmph</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Start Type</th>
                                                    <td class="py-2">Electric start</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">USB Charging Port</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Mobile App Connectivity</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Front Storage Box</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Clock</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Low Battery Indicator</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">No. of Tripmeters</th>
                                                    <td class="py-2">2</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Tripmeter Type</th>
                                                    <td class="py-2">Digital</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Stand Alarm</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">OTA Updates</th>
                                                    <td class="py-2">Available</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Central Locking System</th>
                                                    <td class="py-2">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Instrument Console</th>
                                                    <td class="py-2">Digital</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Charging Time</th>
                                                    <td class="py-2">6-7 Hrs</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Transmission</th>
                                                    <td class="py-2">Automatic</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Capacity</th>
                                                    <td class="py-2">4 kWh</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Battery Type</th>
                                                    <td class="py-2">Lithium Ion</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Charger Type</th>
                                                    <td class="py-2">Home Charger</td>
                                                </tr>
                                                <tr>
                                                    <th class="py-2">Fuel Type</th>
                                                    <td class="py-2">Electric</td>
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
                                                        Kratos R Urban

                                                    </a>
                                                    <strong class="text-dark">₹ 1,86,188</strong>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-3">
                                                <a href="#" class="me-3">
                                                    {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style="min-width: 96px; height: 96px;" class="img-md img-thumbnail" /> */}
                                                </a>
                                                <div class="info">
                                                    <a href="#" class="nav-link mb-1">
                                                        Kratos R Standard

                                                    </a>
                                                    <strong class="text-dark">₹ 2,07,403</strong>
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
export default Secondelectric;