import React, { useState, useEffect } from "react";
import "./IndCollection.css";
import PropTypes from "prop-types";
import IndDetails from "../IndDetails/IndDetails";
import { TeamsPerPage } from "../../utils/Constants";
import cookies from "react-cookies";
import { searchUsers } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function IndCollection({
  mode,
  selectedComp,
  looking,
  curPagePhone,
  setCurPagePhone,
  curIndDetails,
  curIndDetailsPhone,
  setCurIndDetailsPhone,
  noPeople,
  searchQuery,
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    //console.log("Ind collection is ree");
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (x) => {
      setWindowWidth(x.currentTarget.innerWidth);
    });
  }, []);
  useEffect(() => {
    console.log("Ind - ", curIndDetails);
  }, [curIndDetails]);
  return (
    <div
      id="IndCollection__container"
      style={{
        display: selectedComp == 0 ? (looking ? "flex" : "none") : "none",
      }}
    >
      {windowWidth <= 425
        ? curIndDetailsPhone.map((k) => {
            //console.log("<=425");
            return (
              <IndDetails
                key={k.user._id}
                mode={mode}
                name={k.user.name}
                imgUrl={k.user.userImg}
                skills={k.user.skills}
                tools={k.user.tools}
                inviteFunc={() => {}}
                userId={k.user._id}
                invitedBool={k.invited ? true : false}
              />
            );
          })
        : curIndDetails.map((k) => {
            //console.log(k, k.name, k.userImg, k.skills);
            //console.log("Ind coll desk - ", selectedComp);
            return (
              <IndDetails
                key={k.user._id}
                mode={mode}
                name={k.user.name}
                imgUrl={k.user.userImg}
                skills={k.user.skills}
                tools={k.user.tools}
                inviteFunc={() => {}}
                userId={k.user._id}
                invitedBool={k.invited ? true : false}
              />
            );
          })}
      <h4
        id="IndCollection__loadmore"
        onClick={() => {
          if (curPagePhone * TeamsPerPage >= noPeople) {
            var curMode = cookies.load("mode");
            //console.log(curMode);
            curMode == "light"
              ? toastDark("Sorry, You have reached the end!")
              : toastLight("Sorry, You have reached the end!");
          } else {
            try {
              searchUsers(curPagePhone + 1, searchQuery)
                .then((resp) => {
                  setCurPagePhone(curPagePhone + 1);
                  setCurIndDetailsPhone([
                    ...curIndDetailsPhone,
                    ...resp.data.data.usersWithInvites,
                  ]);
                })
                .catch(() => {
                  var curMode = cookies.load("mode");
                  //console.log(curMode);
                  curMode == "light"
                    ? toastDark("Something Went Wrong! Please try again!")
                    : toastLight("Something Went Wrong! Please try again!");
                });
            } catch (error) {
              //console.log(`Caught by try/catch ${error}`);
            }
          }
        }}
      >
        Load more
      </h4>
    </div>
  );
}

IndCollection.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedComp: PropTypes.number.isRequired,
  looking: PropTypes.bool.isRequired,
  curIndDetails: PropTypes.array.isRequired,
  curIndDetailsPhone: PropTypes.array.isRequired,
  setCurIndDetailsPhone: PropTypes.func.isRequired,
  curPagePhone: PropTypes.number.isRequired,
  setCurPagePhone: PropTypes.func.isRequired,
  noPeople: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
