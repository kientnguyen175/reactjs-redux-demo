export default function callApi(){
    return new Promise((resolve,reject) => {
        const url = 'http://localhost:3001/items';
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json()) //đưa dữ liệu về dạng json
            //Kết quả trả về của then đầu tiên sẽ là đầu vào của then thứ 2
            .then((res) => { // return dữ liệu và hiển thị dữ liệu
                resolve(res);
                console.log(res);
            })
            //nếu có lỗi thì return ra lỗi
            .catch((error) => {
                reject(error); 
            });
            
    });
}