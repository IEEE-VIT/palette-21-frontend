import React from "react";
import "./Pagination.css";
import PropTypes from "prop-types";
import { toastDark, toastLight } from "../../utils/Toast";
import { searchUsers, searchTeams } from "../../utils/DashboardHelperFuncs";
import cookies from "react-cookies";
import { TeamsPerPage } from "../../utils/Constants";

export default function Pagination({
  mode,
  noPeople,
  curPage,
  setCurPage,
  selectedComp,
  looking,
  setCurIndDetails,
  setCurTeamsDetails,
  searchQuery,
}) {
  const changePage = (pageNo) => {
    if (looking) {
      try {
        searchUsers(pageNo, searchQuery)
          .then((resp) => {
            setCurIndDetails(resp.data.data.usersWithInvites);
            setCurPage(pageNo);
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
    } else {
      try {
        searchTeams(pageNo, searchQuery)
          .then((resp) => {
            setCurTeamsDetails(resp.data.data.teams);
            setCurPage(pageNo);
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
  };
  const noPages = Math.ceil(noPeople / TeamsPerPage);
  return (
    <div
      id="Pagination__container"
      style={{
        backgroundColor: mode == "dark" ? "#141414" : "#FAFAFA",
        display: selectedComp == 0 ? "flex" : "none",
      }}
    >
      <h4 style={{ color: mode == "dark" ? "#FAFAFA" : "#141414" }}>
        P<span style={{ color: "rgba(86, 58, 232, 1)" }}>A</span>LETTE
      </h4>
      <div id="Pagination__pages">
        <h5
          style={{
            color:
              curPage == 1 ? "rgba(86, 58, 232, 0.25)" : "rgba(86, 58, 232, 1)",
          }}
          className={curPage == 1 ? "Pagination__disabledcontrol" : "dummy"}
          onClick={() => {
            if (curPage != 1) {
              changePage(curPage - 1);
            }
          }}
        >
          Previous
        </h5>
        <h5
          className={
            curPage == 1
              ? "Pagination__selectedpage"
              : noPages < 1
              ? "Pagination__disabledpage"
              : "dummy"
          }
          onClick={() => {
            if (noPages <= 5) {
              if (1 <= noPages) {
                changePage(1);
              }
            } else {
              if (curPage <= 5) {
                changePage(1);
              } else {
                changePage(curPage - 4);
              }
            }
          }}
        >
          {noPages <= 5 ? "1" : curPage <= 5 ? "1" : curPage - 4}
        </h5>
        <h5
          className={
            curPage == 2
              ? "Pagination__selectedpage"
              : noPages < 2
              ? "Pagination__disabledpage"
              : "dummy"
          }
          onClick={() => {
            if (noPages <= 5) {
              if (2 <= noPages) {
                changePage(2);
              }
            } else {
              if (curPage <= 5) {
                changePage(2);
              } else {
                changePage(curPage - 3);
              }
            }
          }}
        >
          {noPages <= 5 ? "2" : curPage <= 5 ? "2" : curPage - 3}
        </h5>
        <h5
          className={
            curPage == 3
              ? "Pagination__selectedpage"
              : noPages < 3
              ? "Pagination__disabledpage"
              : "dummy"
          }
          onClick={() => {
            if (noPages <= 5) {
              if (3 <= noPages) {
                changePage(3);
              }
            } else {
              if (curPage <= 5) {
                changePage(3);
              } else {
                changePage(curPage - 2);
              }
            }
          }}
        >
          {noPages <= 5 ? "3" : curPage <= 5 ? "3" : curPage - 2}
        </h5>
        <h5
          className={
            curPage == 4
              ? "Pagination__selectedpage"
              : noPages < 4
              ? "Pagination__disabledpage"
              : "dummy"
          }
          onClick={() => {
            if (noPages <= 5) {
              if (1 <= noPages) {
                changePage(4);
              }
            } else {
              if (curPage <= 5) {
                changePage(4);
              } else {
                changePage(curPage - 1);
              }
            }
          }}
        >
          {noPages <= 5 ? "4" : curPage <= 5 ? "4" : curPage - 1}
        </h5>
        <h5
          className={
            curPage == 5
              ? "Pagination__selectedpage"
              : noPages > 5 && curPage > 5
              ? "Pagination__selectedpage"
              : noPages < 5
              ? "Pagination__disabledpage"
              : "dummy"
          }
          onClick={() => {
            if (noPages <= 5) {
              if (5 <= noPages) {
                changePage(5);
              }
            } else {
              if (curPage <= 5) {
                changePage(5);
              } else {
                changePage(curPage);
              }
            }
          }}
        >
          {noPages <= 5 ? "5" : curPage <= 5 ? "5" : curPage}
        </h5>
        <h5
          className={
            curPage == noPages ? "Pagination__disabledcontrol" : "dummy"
          }
          style={{
            color:
              curPage < noPages
                ? "rgba(86, 58, 232, 1)"
                : "rgba(86, 58, 232, 0.25)",
          }}
          onClick={() => {
            if (curPage < noPages) {
              changePage(curPage + 1);
            }
          }}
        >
          Next
        </h5>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  mode: PropTypes.string.isRequired,
  noPeople: PropTypes.number.isRequired,
  curPage: PropTypes.number.isRequired,
  setCurPage: PropTypes.func.isRequired,
  selectedComp: PropTypes.number.isRequired,
  looking: PropTypes.bool.isRequired,
  setCurIndDetails: PropTypes.func.isRequired,
  setCurTeamsDetails: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
