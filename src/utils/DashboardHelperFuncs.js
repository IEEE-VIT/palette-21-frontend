//import paletteApi from "../apis/paletteApi";
import cookie from "react-cookies";
import paletteApi from "../apis/paletteApi";
import { TeamsPerPage } from "./Constants";
export const userFetch = () => {
  var token = cookie.load("token");
  // console.log("LMFAOOOO this is a nice cookie", token);
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/dashboard/profile", config)
      .then((resp) => {
        //console.log(resp);
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const getCurProb = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/problem/getMyProblemStatement", config)
      .then((resp) => {
        resolve(resp.data.data);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const generateProb = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/problem/generate", config)
      .then((resp) => {
        resolve(resp.data.data);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const lockProb = (pt1, pt2, pt3) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/problem/lock",
        {
          part1: pt1,
          part2: pt2,
          part3: pt3,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const editTeamName = (newTeamName) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/dashboard/editteamname",
        {
          teamName: newTeamName,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const leaveTeam = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/team/leave", config)
      .then((resp) => {
        //console.log(resp);
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        // console.log(err);
        reject("Something Went Wrong!");
      });
  });
};

export const toggleNeedTeam = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/dashboard/toggleneedTeam", config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const searchUsers = (pageNo, searchQuery = "") => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    params: {
      pageNumber: pageNo,
      pageSize: TeamsPerPage,
      name: searchQuery,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/dashboard/searchusers", config)
      .then((resp) => {
        // console.log(resp);
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const searchTeams = (pageNo, searchQuery = "") => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    params: {
      pageNumber: pageNo,
      pageSize: TeamsPerPage,
      name: searchQuery,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/dashboard/searchteams", config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const sendInvite = async (userId, recaptchaToken) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/invites/send",
        {
          receiversId: userId,
          token: recaptchaToken,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

export const sentInvites = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/invites/sent", config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const recievedInvites = () => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .get("/v1/invites/received", config)
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const cancelInvite = (userId, recaptchaToken) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/invites/cancel",
        {
          receiversId: userId,
          token: recaptchaToken,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const rejectInvite = (teamId) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/invites/reject",
        {
          teamId: teamId,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const acceptInvite = (userId, teamId) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/invites/accept",
        {
          teamId: teamId,
          sentBy: userId,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch(() => {
        reject("Something Went Wrong!");
      });
  });
};

export const joinTeam = (teamCode, recaptchaToken) => {
  var token = cookie.load("token");
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    paletteApi
      .post(
        "/v1/invites/joinByCode",
        {
          teamCode: teamCode,
          token: recaptchaToken,
        },
        config
      )
      .then((resp) => {
        resolve(resp);
        if (resp.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
};

/*
searchUsers

{
    "statusCode": "true",
    "message": "These users match the search criteria",
    "data": {
        "totalUsers": 10,
        "users": [
            {
                "name": "Shubham Palriwala",
                "skills": [],
                "tools": [],
                "_id": "60927f1db82fef07d80bd0d3",
                "email": "spalriwalau@gmail.com",
                "userImg": "https://lh3.googleusercontent.com/a-/AOh14GgkNj7tA5DVfnnF7ihwc6-cgLJhTv6Excld01wNOQ=s96-c",
                "__v": 0
            }
        ]
    }
}


*/

/*
searchteams 
{
    "statusCode": "true",
    "message": "These teams match the search criteria",
    "data": {
        "size": 4,
        "teams": [
            {
                "users": [
                    {
                        "userImg": "https://lh3.googleusercontent.com/a-/AOh14Gjl9V-e-Ad1cxiLhNuiiMnu9D1wGW1LyMUe_2J7Bg=s96-c",
                        "name": "agniva basak",
                        "skills": [
                            "UI/UX",
                            "Graphic Design",
                            "Marketing"
                        ],
                        "tools": [
                            "Figma",
                            "Webflow"
                        ],
                        "_id": "60a287c7fb8b5a0015951fd1",
                        "__v": 0
                    }
                ],
                "locked": [
                    false,
                    false,
                    false
                ],
                "_id": "60a2ca6a5d3f2000157be39c",
                "name": "iUsePaint",
                "__v": 0
            },
            {
                "users": [
                    {
                        "userImg": "https://s3-alpha.figma.com/profile/321cc2da-055d-4156-abaf-b04fa501102e",
                        "name": "AARUSH BHAT",
                        "skills": [
                            "UI/UX",
                            "Branding"
                        ],
                        "tools": [
                            "Figma",
                            "Webflow"
                        ],
                        "_id": "609e3a446e98480015b7ccac",
                        "__v": 0
                    }
                ],
                "locked": [
                    false,
                    false,
                    false
                ],
                "_id": "609e3e8a6e98480015b7ccb7",
                "name": "Noobs",
                "__v": 0
            },
            {
                "users": [
                    {
                        "userImg": "https://www.gravatar.com/avatar/322004d0921d8d08bc7c7892ae1c547a?size=240&default=https%3A%2F%2Fs3-alpha.figma.com%2Fstatic%2Fuser_s_v2.png",
                        "name": "SHUBHAM PALRIWALA 19BCI0209",
                        "skills": [
                            "UI/UX",
                            "Graphic Design",
                            "Marketing"
                        ],
                        "tools": [
                            "Figma",
                            "Webflow"
                        ],
                        "_id": "609e3a6d6e98480015b7ccad",
                        "__v": 0
                    }
                ],
                "locked": [
                    false,
                    false,
                    false
                ],
                "_id": "609e3d566e98480015b7ccb5",
                "name": "Noobs Pro",
                "__v": 0
            },
            {
                "users": [
                    {
                        "userImg": "https://www.gravatar.com/avatar/9b30e8c63c41145ead56bcfef4f617a2?size=240&default=https%3A%2F%2Fs3-alpha.figma.com%2Fstatic%2Fuser_i_v2.png",
                        "name": "Ishan Khandelwal",
                        "skills": [
                            "UI/UX",
                            "Interactive Design"
                        ],
                        "tools": [
                            "Figma"
                        ],
                        "_id": "609e3aa66e98480015b7ccaf",
                        "__v": 0
                    }
                ],
                "locked": [
                    false,
                    false,
                    false
                ],
                "_id": "609e3c646e98480015b7ccb2",
                "name": "Ishan's Team",
                "__v": 0
            }
        ]
    }
}


*/

/*{
    "statusCode": "true",
    "message": "User profile fetched",
    "data": {
        "user": {
            "userImg": "https://lh3.googleusercontent.com/a-/AOh14GgkNj7tA5DVfnnF7ihwc6-cgLJhTv6Excld01wNOQ=s96-c",
            "name": "Shubham Palriwala",
            "skills": [
                "UI/UX",
                "Graphic Design",
                "Marketing"
            ],
            "tools": [
                "Figma",
                "Webflow"
            ],
            "teamCode": "EB9RCT",
            "needTeam": false,
            "discordHandle": "LaalShaitaan#9023",
            "_id": "609f96c36e6640047505b742",
            "__v": 0
        },
        "team": {
            "users": [
                {
                    "userImg": "https://lh3.googleusercontent.com/a-/AOh14GgkNj7tA5DVfnnF7ihwc6-cgLJhTv6Excld01wNOQ=s96-c",
                    "name": "Shubham Palriwala",
                    "skills": [
                        "UI/UX",
                        "Graphic Design",
                        "Marketing"
                    ],
                    "tools": [
                        "Figma",
                        "Webflow"
                    ],
                    "discordHandle": "LaalShaitaan#9023",
                    "_id": "609f96c36e6640047505b742",
                    "__v": 0
                }
            ],
            "problemStatement": [
                "website",
                "restaurant",
                "humans"
            ],
            "locked": [
                true,
                false,
                true
            ],
            "_id": "60a0ffd31cb6a502ac056066",
            "name": "Noob",
            "__v": 0
        }
    }
}*/

/*export const reCaptchaCheck = (token) => {
    return new Promise((resolve, reject) => {
        activityLayerApi.post("/user/auth/recaptcha", {
            token,
        }, {

        })
            .then((resp) => {
                //console.log(resp.data.auth);
                if (resp.data.auth !== 1) {
                    throw new Error("Auth was not equal to 1");
                }
                resolve();
            })
            .catch((err) => {
                //console.log(err);
                reject("Oops! Looks like your reCaptcha is failing, try refreshing this page or switch to a better network connection.");
            })
    })
}
*/
