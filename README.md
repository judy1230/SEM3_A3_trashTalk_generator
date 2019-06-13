# Project
<h3>Trash Talk Generator</h3>

# Getting Start
<h4>getting start by downloading the project and running below command in teminal.</h4>
<pre><code>
[~/generate_trashtalk] $ npm i express
[~/generate_trashtalk] $ npm run dev
</pre><code>open browser, typing localhost:1250 to start </h4>

this project will run in node.js enviroment, install it by below command in your teminal:
<pre><code>
[~/] $ nvm install 10.15.0
[~/] $ nvm install 10.15.

</pre></code>
# Material
<h4>browser:localhost＠port:1250</h4>
<h4>software framewark: <h4>
<h5>1. express: for sending req / res request</h5>
<h5>2. mocha: for unit tests</h5>
<h4>app.js</h4>
<h4>generate_trashTalk.js</h4>
<h4>main.handlebars @views-->layouts</h4>
<h4>index.handlebars @views</h4>
<h4>Data List</h4>
<pre><code>
const task = {
		engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
		designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
	}

	const phrase = ['很簡單', '很容易', '很快', '很正常']
</pre></code>

    



# Features
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>User Generate Trash Talk</td>
<td>Select one, pressing "Generate Trash Talk" will generate a trash talk</td>
</tr>
</tbody>
</table>



# Deployment

  <p><h4>1. app.js</h4></p> <p>This is the main js file to control each params actions in each of handlebars.</p>
  <p><h4>2. main.handlebars</h4></p> <p>This is a orginal index html, control by app.js setting up on veiw engine and stored in folder
   views/layouts, it's mean to display the restaurants in area of {{data}} </p>
  <p><h4>3. index.handlebars</h4></p> <p>This is a framework for each restuarant to apply in and shown in index page, also controled by app.js as below:  </p>
<pre><code>
app.get('/', (req, res) => {
	// past the movie data into 'index' partial template
	res.render('index', { restaurants: restaurantList.results })
})
</code></pre> 

<p><h4>4. generate_trashTalk.js</h4></p> <p>This script is to deal with the data sent from method of POST, the POST method where is written in 
<pre><code><form method="POST" action="/"></code></pre> of index.handlebars. store param in <code><pre>req.body</code></pre></p>, like this <code><pre>options = {designer: 'on'}</code></pre>

  <p>generate_trashTalk.js will handle req.body to the right output</p>
  
  if the desinger is selected by user,
  <pre><code>
  if (options.engineer === 'on'){	
		let taskSelector = 'engineer'
		let taskIndex =  Math.floor(Math.random()*task.engineer.length)
		return output(taskSelector, taskIndex)
	}
	  else if (options.designer === 'on'){
			let taskSelector = 'designer'
			let taskIndex =  Math.floor(Math.random()*task.designer.length)
		  return output(taskSelector, taskIndex)
		}

		else if (options.business === 'on'){
			let taskSelector = 'entrepreneur'
			let taskIndex =  Math.floor(Math.random()*task.entrepreneur.length)
		  return output(taskSelector, taskIndex)
		}
   </code></pre>
  
 then it will run the speecific string from Data List to output  
 <pre><code>
  function output(taskSelector, taskIndex) {
		let phraseIndex = Math.floor(Math.random() * phrase.length)
		let phrasetalk = phrase[phraseIndex]
		let trashTalk = task[taskSelector][taskIndex]
		return  outputString = `身為一個${taskSelector}, ${trashTalk}, ${phrasetalk}.....(ノ-_-)ノ~┻━┻`
   </code></pre>
   
 # Tests
 added unit tests for output function and copy it in tests folder.
 test results pls see tests index.html.
 
 materials:
 1. generate_spec.js : test script
 2. output.js : script has been test
 3. two scripts are set up in index.html :
 
 
 
	<script src="../tests/output.js"></script>

	<script src="../tests/generate_spec.js"></script>
 
  
  <h4>Copy index.html path in the broswer then you can see the result. </h4>
  


# Authors
  <li>Judy</li> <p>first edited on 06/12/2019</p>
