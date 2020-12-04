import axios from 'axios';

function call(url, data, type = "POST") {
  data = data || {};
  type = type.toUpperCase();

  if (type == "GET") {
    let dataStr = ""; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + "=" + data[key] + "&";
    });

    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
  }

  let option = {
    method: type,
    url,
    data
  };

  return axios(option);
}

async function upload(file) {
  let fd = new FormData();
  fd.append("file", file, file.name);

  return await axios.post("files/upload", fd).then(res => {
    if (res.status == 200) {
      let data = res.result;
      return data.url;
    } else throw res.message;
  });
}

export default {
  upload,
  login: data => call('users/login', data),
  signup: data => call('users/signup', data),
  getUserInfo: data => call('users/getInfo', data),

  changePwd: data => call('/users/changePassword', data),


}
