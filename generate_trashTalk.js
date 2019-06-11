function generateTrashTalk(options) {
	const task = {
		engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
		designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
	}

	const phrase = ['很簡單', '很容易', '很快', '很正常']
	
	//const options = {designer: 'on'}
	
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

	function output(taskSelector, taskIndex) {
		let phraseIndex = Math.floor(Math.random() * phrase.length)
		let phrasetalk = phrase[phraseIndex]
		let trashTalk = task[taskSelector][taskIndex]
		return  outputString = `身為一個${taskSelector}, ${trashTalk}, ${phrasetalk}.....(ノ-_-)ノ~┻━┻`
		

	}
	console.log(outputString)
}

module.exports = generateTrashTalk