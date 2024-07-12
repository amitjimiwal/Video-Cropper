function downloadJSON(filename, jsonData) {
     const element = document.createElement('a');
     element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData, null, 2)));
     element.setAttribute('download', filename);

     element.style.display = 'none';
     document.body.appendChild(element);

     element.click();

     document.body.removeChild(element);
}
export { downloadJSON };