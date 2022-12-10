import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
const CardAuctions = () => {
  const [NftsData, setNftsData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row mb-30_reset">
      {NftsData.map(
        (val, i) =>
          val.isAuction &&
          val.isMarketplace && (
            <>
              {" "}
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                key={i}
                style={{ maxWidth: "25rem", width: "100%" }}
              >
                <div className="card__item two">
                  <div className="card_body space-y-10">
                    {/* =============== */}

                    <div className="card_head">
                      <Link>
                        <img
                          src={`https://ipfs.io/ipfs/${val.image}`}
                          alt="nftimage"
                        />
                      </Link>
                      {/*
                       */}
                    </div>
                    {/* =============== */}
                    <h6 className="card_title">{val.nftName}</h6>
                    <p style={{ marginTop: "0.2rem", color: "#0a64bc" }}>
                      {" "}
                      {val.userInfo[0].firstname === undefined
                        ? "No name"
                        : val.userInfo[0].firstname}{" "}
                      {val.userInfo[0].lastname === undefined
                        ? ""
                        : val.userInfo[0].lastname}
                    </p>
                    <div className="card_footer d-block space-y-10">
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="">
                            <p
                              className="txt_sm d-flex flex-column"
                              style={{ margin: 0 }}
                            >
                              <span
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                }}
                              >
                                Price:
                              </span>
                              <span
                                className="txt_sm"
                                style={{
                                  color: "#000",
                                  fontSize: "10px",
                                }}
                              >
                                {val.price} ETH
                              </span>
                            </p>
                          </div>
                          <div>
                            <div
                              className="py-2 d-flex gap-2"
                              style={{ alignItems: "center" }}
                            >
                              <div>
                                <img
                                  src={val.userInfo[0].avatar_url}
                                  alt=""
                                  width="40px"
                                  height="40px"
                                  style={{
                                    borderRadius: "9999px",
                                    objectFit: "cover",
                                  }}
                                ></img>
                              </div>

                              <Link to={"/profile/" + val.userInfo[0].wallet}>
                                <div>
                                  <div
                                    style={{
                                      color: "#000",
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Artist
                                  </div>
                                  <div
                                    style={{
                                      color: "#000",
                                      fontSize: "10px",
                                    }}
                                  >
                                    @{val.userInfo[0].username}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* <div className="hr" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
      )}
    </div>
  );
};

export default CardAuctions;
