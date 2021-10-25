import React, { useState } from "react";
import "./Data.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Tempdata = () => {
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
      <div className="container mx-auto bg-secondary p-3">
        <h1 className="text-center my-3 fw-bolder ">Your PSP Rating</h1>
        <h5 className="text-center m-2 mb-4 text-white">
          Please provide the correct details.
        </h5>
        <div className="row">
          <div className="col-12 col-lg-6">
            <form className="form-control mx-auto bg-dark">
              <p className="text-center w-100 text-white">
                Enter the number of freeCodecamp certifications completed
              </p>
              <input
                required
                type="number"
                className="form-control text-center"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Number of freeCodeCamp certifications completed"
                value={numberOfCertifications}
                name="numberOfCertifications"
                onChange={(e) => {
                  setNumberOfCertifications(e.target.value);
                }}
              />
              <p className="text-center w-100 text-white">
                Enter the time taken to complete these certifications (in
                months)
              </p>
              <input
                required
                type="number"
                className="form-control text-center"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Time taken to complete these certifiations"
                value={time}
                name="time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <p className="text-center w-100 text-white">
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
                placeholder="Do you maintain ReadME for GitHub Repositories ?"
                className="drop-down mx-auto"
              />
              <p className="text-center w-100 text-white">
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
                className="drop-down mx-auto"
              />
              <p className="text-center w-100 text-white">
                Please drop your freeCodeCamp Profile Link
              </p>
              <input
                required
                type="url"
                placeholder="Please drop your freeCodeCamp Profile Link"
                className="form-control text-center"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="fccLink"
                value={fccLink}
                onChange={(e) => {
                  setFCCLink(e.target.value);
                }}
              />
              <p className="text-center w-100 text-white">
                Please drop your GitHub Profile Link
              </p>
              <input
                required
                type="url"
                placeholder="Please drop your GitHub Profile Link"
                className="form-control text-center"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="githubLLink"
                value={githubLLink}
                onChange={(e) => {
                  setGithubLink(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                  <div className="container my-5 text-center">
                    <button
                      className="btn btn-success text-center"
                      onClick={submitForm}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6 mx-auto secondary-div">
                  <div className="container my-5 text-center">
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
          <div className="col-12 col-lg-6 mx-auto">
            <div className="game-board my-5">
            {/* High Potential, High Performance */}
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
              {/* Mid Potential, High Performance */}
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
                className="box b-7 text-center "
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
              {/* Mid, Low */}
              <div
                className="box b-8 text-center "
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
              {/* low, Low */}
              <div
                className="box b-9 text-center "
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
            <div className="container text-center">
              {allEntry.map((currentElement) => {
                const { numberOfCertifications, time, fccLink, githubLLink } =
                  currentElement;
                return (
                  <>
                    <p className="text-center text-wrap">
                      You have earned{" "}
                      <span className="fw-bolder text-wrap">
                        {numberOfCertifications}
                      </span>{" "}
                      certificate(s) from freeCodeCamp in{" "}
                      <span className="fw-bolder text-wrap">{time}</span>{" "}
                      months.
                    </p>
                    <p className="text-center text-wrap">
                      <span className="fw-bolder">freeCodeCamp Link :</span>{" "}
                      <a
                        href={fccLink}
                        className="text-dark text-decoration-none"
                        target="_blank"
                      >
                        {fccLink}
                      </a>
                    </p>
                    <p className="text-center text-wrap">
                      <span className="fw-bolder text-wrap">GitHub Link :</span>{" "}
                      <a
                        href={githubLLink}
                        className="text-dark text-decoration-none"
                        target="_blank"
                      >
                        {githubLLink}
                      </a>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempdata;
