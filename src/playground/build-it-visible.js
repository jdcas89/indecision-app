




const app = {
  title: 'Visibility toggle',
  showingDetails: false
}

let buttonText = 'Show details'

const onShowDetails = () => {
  if(app.showingDetails){
    app.showingDetails =  !app.showingDetails;
    buttonText = 'Show details'
  }else{
    app.showingDetails = !app.showingDetails;
    buttonText = 'Hide details'
  }
  render()
}

const appRoot = document.getElementById("app");


const render = () => {
  const template = (
    <div>
      <h1> {app.title}</h1>
      <button onClick={onShowDetails}>{ buttonText}</button>
      {
        <p hidden={!app.showingDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec sit amet lorem et nisl sollicitudin venenatis nec eget elit.
         Maecenas in eleifend massa, feugiat consectetur justo. Vivamus at hendrerit massa, 
         vitae commodo magna. Nullam luctus metus eu mauris imperdiet, at congue ex posuere.</p>
      }
    </div>
  );
  ReactDOM.render(template, appRoot);
  
}

render();