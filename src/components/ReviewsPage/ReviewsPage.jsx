import React, { useState, useEffect } from "react";
import "./ReviewsPage.css";
import { CircularProgress } from "@material-ui/core";
import round1pic from "../../assets/round1_disquali.png";
import round2pic from "../../assets/round2_disquali.png";
//import monalisa from "../../assets/monalisa.png";
import PropTypes from "prop-types";
import {
  getCurSubmission,
  createSubmission,
  getRoundDetail,
} from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";
import { makeStyles } from "@material-ui/core/styles";
import cookies from "react-cookies";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
var moment = require("moment-timezone");

export default function ReviewsPage({ selectedPage, setSelectedPage }) {
  const useStyles = makeStyles(() => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  //const [eligibity, setEligibity] = useState(true);
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  const [part3, setPart3] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submissionLink, setSubmissionLink] = useState("");
  const [presentationLink, setPresentationLink] = useState("");
  const [anyOtherLink, setAnyOtherLink] = useState("");
  const [prototypeLink, setPrototypeLink] = useState("");
  const [roundNo, setRoundNo] = useState(1);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  //const [endTime] = useState("28th May 2021 , 10:00 AM");
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState("");
  const [tracks, setTracks] = useState([]);
  const deadlines = [
    "28th May 2021, 1PM",
    "28th May 2021, 9PM",
    "29th May 2021, 3PM",
  ];
  const handleClose = () => {
    setSelectedPage(0);
    setOpen(false);
  };
  /*yy
graphicDesignTrack: "Best Graphic Design",
  bestPitchTrack: "Best Pitch",
  bestFreshersTrack: "Best Freshers",
  bestCommunityVotedSolutionTrack: "Best Community Voted Solution",
  */
  const prefWithZero = (x) => {
    if (parseInt(x) < 10) {
      return "0" + x;
    } else {
      return x;
    }
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatDate = () => {
    var date = new Date();
    var strDate =
      date.getDate() +
      "th " +
      months[date.getMonth() + 1] +
      " 2021, " +
      prefWithZero(date.getHours()) +
      ":" +
      prefWithZero(date.getMinutes());
    console.log(strDate);
    console.log(tracks);
    return strDate;
  };
  const parseFedDate = (date) => {
    var strDate =
      prefWithZero(parseInt(date.substr(8, 2))) +
      "th " +
      months[parseInt(date.substr(5, 2)) - 1] +
      " 2021, " +
      prefWithZero(parseInt(date.substr(11, 2))) +
      ":" +
      prefWithZero(parseInt(date.substr(14, 2)));
    return strDate;
  };
  useEffect(() => {
    try {
      getCurSubmission()
        .then((resp) => {
          console.log(resp);
          // new Date(resp.nextDeadline.getHighBits() * 1000)
          //2021-05-28T01:18:47.567Z
          console.log(moment.tz("2021-05-28T01:18:47.567Z"));
          console.log(local);
          if (!resp.eligibilty) {
            setOpen(true);
          }
          if (resp.submissionAlreadyExists) {
            console.log(resp.submissionAlreadyExists.updatedAt);
            setTitle(resp.submissionAlreadyExists.title);
            setDescription(resp.submissionAlreadyExists.description);
            console.log(resp.submissionAlreadyExists.tracks);
            var stillUtc = moment
              .utc(resp.submissionAlreadyExists.updatedAt)
              .toDate();
            var local = moment(stillUtc).local().format();
            setLastSaved(parseFedDate(local));
            setTracks(resp.submissionAlreadyExists.tracks);
            setSubmissionLink(resp.submissionAlreadyExists.submissionLink[0]);
            setPrototypeLink(resp.submissionAlreadyExists.submissionLink[1]);
            setPresentationLink(resp.submissionAlreadyExists.submissionLink[2]);
            setAnyOtherLink(resp.submissionAlreadyExists.submissionLink[3]);
          }
          setPart1(resp.userTeam.problemStatement[0]);
          setPart2(resp.userTeam.problemStatement[1]);
          setPart3(resp.userTeam.problemStatement[2]);
        })
        .catch((err) => {
          var curMode = cookies.load("mode");
          curMode == "light" ? toastDark(err) : toastLight(err);
        });
    } catch (error) {
      var curMode = cookies.load("mode");
      curMode == "light" ? toastDark(error) : toastLight(error);
    }
  }, [selectedPage]);

  useEffect(() => {
    try {
      getRoundDetail()
        .then((resp) => {
          setRoundNo(resp.currentRoundNo);
          console.log(new Date(resp.nextDeadline.getHighBits() * 1000));
        })
        .catch((err) => {
          var curMode = cookies.load("mode");
          curMode == "light" ? toastDark(err) : toastLight(err);
        });
    } catch (error) {
      var curMode = cookies.load("mode");
      curMode == "light" ? toastDark(error) : toastLight(error);
    }
  }, []);
  return (
    <div
      id="ReviewsPage__container"
      style={{ display: selectedPage == 2 ? "flex" : "none" }}
    >
      <div id="ReviewsPage__form" style={{ padding: "20px 20px" }}>
        <div
          id="ReviewsPage__header"
          style={{
            widht: "100%",
            display: "flex",
            marginBottom: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div id="ReviewsPage__enddiv">
            Round {roundNo} ends at <span>{deadlines[roundNo - 1]} IST</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alingItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                  color: "rgba(122, 122, 122, 1)",
                  fontSize: "0.9rem",
                }}
              >
                {lastSaved == "" ? "" : "Last saved on " + lastSaved}
              </p>
            </div>
            <div
              onClick={() => {
                setSaving(true);
                try {
                  createSubmission(title, description, tracks, [
                    submissionLink,
                    prototypeLink,
                    presentationLink,
                    anyOtherLink,
                  ])
                    .then(() => {
                      var fDate = formatDate();
                      console.log(fDate);
                      setLastSaved(fDate);
                      setSaving(false);
                    })
                    .catch((err) => {
                      setSaving(false);
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(err) : toastLight(err);
                    });
                } catch (error) {
                  setSaving(false);
                  var curMode = cookies.load("mode");
                  curMode == "light" ? toastDark(error) : toastLight(error);
                }
              }}
              className={
                saving
                  ? "ReviewsPage__submitbtn ReviewsPage__saving"
                  : "ReviewsPage__submitbtn"
              }
            >
              {saving ? (
                <CircularProgress
                  style={{
                    width: "22px",
                    height: "22px",
                    alignSelf: "center",
                    color: "white",
                  }}
                />
              ) : (
                "Save Progress"
              )}
            </div>
          </div>
        </div>
        <div
          id="ReviewsPage__probst"
          style={{
            backgroundColor: "#FAFAFA",
            padding: "20px 20px",
            borderRadius: "8px",
          }}
        >
          <h3>Problem Statement</h3>
          <p>
            Design <span>{part1}</span> for <span>{part2}</span> to help{" "}
            <span>{part3}</span>
          </p>
        </div>
        <h3
          id="ReviewsPage__projinfo"
          style={{
            color: "rgba(122, 122, 122, 1)",
            fontSize: "1.05rem",
            margin: "20px 0",
            marginBottom: "20px",
          }}
        >
          Project Information
        </h3>
        <h3 className="ReviewsPage__qtitle">
          Enter Title<span className="ReviewsPage__required">*</span>
        </h3>
        <input
          type="text"
          value={title}
          placeholder="Enter title of your project"
          onChange={(event) => setTitle(event.target.value)}
        />
        <h3 className="ReviewsPage__qtitle">
          Enter Description<span className="ReviewsPage__required">*</span>
        </h3>
        <textarea
          type="text"
          value={description}
          placeholder="Enter description of your project"
          onChange={(event) => setDescription(event.target.value)}
        />
        <h3 className="ReviewsPage__qtitle">Enter Tracks</h3>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              border: "2px solid rgba(170, 170, 170, 1)",
              borderRadius: "6px",
              width: "200px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "14px 10px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              style={{
                width: "min-content",
                marginBottom: "0px",
                margin: "0px 10px",
                marginLeft: "0px",
              }}
              type="checkbox"
              checked={tracks.includes("Best Graphic Design") ? true : false}
              onChange={() => {
                if (tracks.includes("Best Graphic Design")) {
                  setTracks(
                    tracks.filter((elem) => {
                      return elem != "Best Graphic Design";
                    })
                  );
                } else {
                  setTracks([...tracks, "Best Graphic Design"]);
                }
              }}
            />{" "}
            <p style={{ marginBottom: "0", fontSize: "1rem" }}>
              Best Graphic Design
            </p>
          </div>
          <div
            style={{
              border: "2px solid rgba(170, 170, 170, 1)",
              borderRadius: "6px",
              width: "120px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "14px 10px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              style={{
                width: "min-content",
                marginBottom: "0px",
                margin: "0px 10px",
                marginLeft: "0px",
              }}
              type="checkbox"
              checked={tracks.includes("Best Pitch") ? true : false}
              onChange={() => {
                if (tracks.includes("Best Pitch")) {
                  setTracks(
                    tracks.filter((elem) => {
                      return elem != "Best Pitch";
                    })
                  );
                } else {
                  setTracks([...tracks, "Best Pitch"]);
                }
              }}
            />{" "}
            <p style={{ marginBottom: "0", fontSize: "1rem" }}>Best Pitch</p>
          </div>
          <div
            style={{
              border: "2px solid rgba(170, 170, 170, 1)",
              borderRadius: "6px",
              width: "150px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "14px 10px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              style={{
                width: "min-content",
                marginBottom: "0px",
                margin: "0px 10px",
                marginLeft: "0px",
              }}
              type="checkbox"
              checked={tracks.includes("Best Freshers") ? true : false}
              onChange={() => {
                if (tracks.includes("Best Freshers")) {
                  setTracks(
                    tracks.filter((elem) => {
                      return elem != "Best Freshers";
                    })
                  );
                } else {
                  setTracks([...tracks, "Best Freshers"]);
                }
              }}
            />{" "}
            <p style={{ marginBottom: "0", fontSize: "1rem" }}>Best Freshers</p>
          </div>
          <div
            style={{
              border: "2px solid rgba(170, 170, 170, 1)",
              borderRadius: "6px",
              width: "270px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "14px 10px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              style={{
                width: "min-content",
                marginBottom: "0px",
                margin: "0px 10px",
                marginLeft: "0px",
              }}
              type="checkbox"
              checked={
                tracks.includes("Best Community Voted Solution") ? true : false
              }
              onChange={() => {
                if (tracks.includes("Best Community Voted Solution")) {
                  setTracks(
                    tracks.filter((elem) => {
                      return elem != "Best Community Voted Solution";
                    })
                  );
                } else {
                  setTracks([...tracks, "Best Community Voted Solution"]);
                }
              }}
            />{" "}
            <p style={{ marginBottom: "0", fontSize: "1rem" }}>
              Best Community Voted Solution
            </p>
          </div>
        </div>
        <h3 className="ReviewsPage__qtitle">
          Enter Submission Link<span className="ReviewsPage__required">*</span>
        </h3>
        <input
          type="text"
          value={submissionLink}
          placeholder="eg. https://figma.com"
          onChange={(event) => setSubmissionLink(event.target.value)}
        />
        <p className="ReviewsPage__helpertext">
          Submit your Figma, Sketch, XD ,etc file link
        </p>
        <h3 className="ReviewsPage__qtitle">Enter Prototype Link</h3>
        <input
          type="text"
          value={prototypeLink}
          placeholder="eg.  https://figma.com/[prototype link]"
          onChange={(event) => setPrototypeLink(event.target.value)}
        />
        <p className="ReviewsPage__helpertext">
          Submit your interactive prototype link
        </p>
        <h3 className="ReviewsPage__qtitle">Enter Presentation Link</h3>
        <input
          type="text"
          value={presentationLink}
          placeholder="eg. https://drive.google.com/asdasdasd"
          onChange={(event) => setPresentationLink(event.target.value)}
        />
        <p className="ReviewsPage__helpertext">Upload your presentation link</p>
        <h3 className="ReviewsPage__qtitle">Enter Any Other Relevant Link</h3>
        <input
          type="text"
          value={anyOtherLink}
          placeholder="eg. https://drive.google.com/asdasdasd"
          onChange={(event) => setAnyOtherLink(event.target.value)}
        />
        <p className="ReviewsPage__helpertext">
          Upload any other relevant link , wireframe,etc
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alingItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                  color: "rgba(122, 122, 122, 1)",
                  fontSize: "0.9rem",
                }}
              >
                {lastSaved == "" ? "" : "Last saved on " + lastSaved}
              </p>
            </div>
            <div
              onClick={() => {
                setSaving(true);
                try {
                  createSubmission(title, description, tracks, [
                    submissionLink,
                    prototypeLink,
                    presentationLink,
                    anyOtherLink,
                  ])
                    .then(() => {
                      setLastSaved(formatDate());
                      setSaving(false);
                    })
                    .catch((err) => {
                      setSaving(false);
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(err) : toastLight(err);
                    });
                } catch (error) {
                  setSaving(false);
                  var curMode = cookies.load("mode");
                  curMode == "light" ? toastDark(error) : toastLight(error);
                }
              }}
              className={
                saving
                  ? "ReviewsPage__submitbtn ReviewsPage__saving"
                  : "ReviewsPage__submitbtn"
              }
            >
              {saving ? (
                <CircularProgress
                  style={{
                    width: "22px",
                    height: "22px",
                    alignSelf: "center",
                    color: "white",
                  }}
                />
              ) : (
                "Save Progress"
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          border: "none",
          outline: "none",
          display: selectedPage == 2 ? "flex" : "none",
        }}
      >
        <Fade
          style={{
            border: "none",
            outline: "none",
            display: selectedPage == 2 ? "flex" : "none",
          }}
          in={open}
        >
          <img
            style={{
              border: "none",
              outline: "none",
              display: selectedPage == 2 ? "flex" : "none",
            }}
            src={roundNo == 2 ? round1pic : round2pic}
          />
        </Fade>
      </Modal>
    </div>
  );
}

ReviewsPage.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};
