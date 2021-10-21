import React, { useState } from "react";
import "./Data.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";


const Data = () => {
  const data = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];
  const [numberOfCertifications, setNumberOfCertifications] = useState();
  const [time, setTime] = useState();
  const [readme, setReadme] = useState();

  const [commit, setCommit] = useState();
  const [fccLink, setFCCLink] = useState();
  const [githubLLink, setGithubLink] = useState();

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = {
      numberOfCertifications: numberOfCertifications,
      time: time,
      readme: readme,
      commit: commit,
      fccLink: fccLink,
      githubLLink: githubLLink,
    };

    setAllEntry([newEntry]);
  };

  const resetAll = () => {
    setNumberOfCertifications("");
    setTime("");
    setFCCLink("");
    setGithubLink("");
    setReadme("");
    setCommit("");
    setAllEntry([]);
  };

  return (
    <>
      <div className="bg-secondary">
        <div className="container-fluid primary-div ">
          <h1 className="text-center my-3 fw-bolder">
            Help Us in Shorlisting You
          </h1>
          <h5 className="text-center m-2">
            Please provide the correct details.
          </h5>
          <form className="form-control mx-auto bg-dark" onSubmit={submitForm}>
            <div className="row">
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Enter the number of freeCodecamp certifications completed
                  </p>
                  <input
                    required
                    type="number"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Number of freeCodeCamp certifications completed"
                    value={numberOfCertifications}
                    name="numberOfCertifications"
                    onChange={(e) => {
                      setNumberOfCertifications(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Enter the time taken to complete these certifications (in
                    months)
                  </p>
                  <input
                    required
                    type="number"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Time taken to complete these certifiations"
                    value={time}
                    name="time"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Do you prepare ReadME for your GitHub repositories ?
                  </p>
                  <Dropdown
                    required
                    name="readme"
                    options={data}
                    value={readme}
                    onChange={(e) => {
                      setReadme(e.value);
                    }}
                    placeholder="Do you maintain ReadME for your GitHub Repositories ?"
                    className="drop-down "
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Do you use Git commands to commit ?
                  </p>
                  <Dropdown
                    required
                    name="commit"
                    options={data}
                    value={commit}
                    onChange={(e) => {
                      setCommit(e.value);
                    }}
                    placeholder="Do you use Git commands to commit ?"
                    className="drop-down "
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Please drop your freeCodeCamp Profile Link
                  </p>
                  <input
                    required
                    type="url"
                    placeholder="Please drop your freeCodeCamp Profile Link"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    name="fccLink"
                    value={fccLink}
                    onChange={(e) => {
                      setFCCLink(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="d-flex flex-column w-100">
                  <p className="text-center w-100">
                    Please drop your GitHub Profile Link
                  </p>
                  <input
                    required
                    type="url"
                    placeholder="Please drop your GitHub Profile Link"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    name="githubLLink"
                    value={githubLLink}
                    onChange={(e) => {
                      setGithubLink(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="container-fluid my-5 text-center">
                  <button className="btn btn-success text-center ">
                    SUBMIT
                  </button>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                <div className="container-fluid my-5 text-center">
                  <button
                    className="btn btn-danger text-center "
                    onClick={resetAll}
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid my-4 ">
          {allEntry.map((currentElement) => {
            const { numberOfCertifications, time, fccLink, githubLLink } =
              currentElement;
            return (
              <>
                <p className="text-center">
                  You have earned{" "}
                  <span className="fw-bolder">{numberOfCertifications}</span>{" "}
                  certificate(s) from freeCodeCamp in{" "}
                  <span className="fw-bolder">{time}</span> months.
                </p>
                <p className="text-center">
                  <span className="fw-bolder">freeCodeCamp Link :</span>{" "}
                  {fccLink}
                </p>
                <p className="text-center">
                  <span className="fw-bolder">GitHub Link :</span> {githubLLink}
                </p>
              </>
            );
          })}
          <div className="container-fluid text-center">
            <div className="game-board my-5">
              <div
                className="box b-1 text-center"
                style={
                  (numberOfCertifications == 3 &&
                    time > 0 &&
                    readme == "Yes" &&
                    commit == "Yes") ||
                  (numberOfCertifications >= 4 &&
                    time > 0 &&
                    readme == "Yes" &&
                    commit == "Yes")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                High Potential, High Performance
              </div>
              <div
                className="box b-2 text-center"
                style={
                  numberOfCertifications == 2 &&
                  time > 0 &&
                  readme == "Yes" &&
                  commit == "Yes"
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Mid Potential, High Performance
              </div>
              <div
                className="box b-3 text-center"
                style={
                  numberOfCertifications == 1 &&
                  time > 0 &&
                  readme == "Yes" &&
                  commit == "Yes"
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Low Potential, High Performance
              </div>
              <div
                className="box b-4 text-center"
                style={
                  (numberOfCertifications == 3 &&
                    time > 0 &&
                    readme == "Yes" &&
                    commit == "No") ||
                  (numberOfCertifications == 3 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "Yes") ||
                  (numberOfCertifications >= 4 &&
                    time > 0 &&
                    readme == "Yes" &&
                    commit == "No") ||
                  (numberOfCertifications >= 4 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "Yes")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                High Potential, Mid Performance
              </div>
              <div
                className="box b-5 text-center"
                style={
                  (numberOfCertifications == 2 &&
                    time > 0 &&
                    readme == "Yes" &&
                    commit == "No") ||
                  (numberOfCertifications == 2 &&
                    time >= 6 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "Yes")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Mid Potential, Mid Performance
              </div>
              <div
                className="box b-6 text-center"
                style={
                  (numberOfCertifications == 1 &&
                    readme == "Yes" &&
                    commit == "No") ||
                  (numberOfCertifications == 1 &&
                    readme == "No" &&
                    commit == "Yes")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Low Potential, Mid Performance
              </div>
              <div
                className="box b-7 text-center"
                style={
                  (numberOfCertifications == 3 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "No") ||
                  (numberOfCertifications >= 4 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "No")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                High Potential, Low Performance
              </div>
              <div
                className="box b-8 text-center"
                style={
                  (numberOfCertifications == 2 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "No") ||
                  (numberOfCertifications == 2 &&
                    time >= 6 &&
                    time > 0 &&
                    readme == "No" &&
                    commit == "No")
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Mid Potential, Low Performance
              </div>
              <div
                className="box b-9 text-center"
                style={
                  numberOfCertifications == 1 &&
                  readme == "No" &&
                  commit == "No"
                    ? { backgroundColor: "black" }
                    : {}
                }
              >
                Low Potential, Low Performance
              </div>
            </div>
          </div>
          <p className="text-dark fw-bold text-center ">
            * X-axis is PSP Potential and Y-axis is PSP Performance*
          </p>
        </div>
      </div>
    </>
  );
};
export default Data;
