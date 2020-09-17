// 비디오를 로딩하니까 home도 videocontroller로 들어간다
export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy });
};

export const vidoes = (req, res) =>
  res.render("vidoes", { pageTitle: "Vidoes" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Vidoe" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
