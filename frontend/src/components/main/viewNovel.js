import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const ViewNovel = () => {
  const { id } = useParams();
  const [NovelData, setNovelData] = useState({});
  const [loading, setLoading] = useState(true);
  const url = app_config.api_url;

  useEffect(() => {
    console.log(id);
    fetch(url + "novel/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNovelData(data);
        setLoading(false);
      });
  }, []);

  const showNovel = () => {
    if (loading) {
      return <h1>Loading</h1>;
    } else {
      return <video src={+NovelData.file} controls></video>;
    }
  };

  return <div>{showNovel()}</div>;
};

export default ViewNovel;
