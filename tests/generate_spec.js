let should = chai.should()

describe('function output', function () {

	//engineer
	it('select engineer, task(0), phrase(0)', function () {
		var result = output('engineer',0 ,0)
		result.should.be.equal('身為一個engineer, 加個按鈕, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(0), phrase(1)', function () {
		var result = output('engineer', 0, 1)
		result.should.be.equal('身為一個engineer, 加個按鈕, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(0), phrase(2)', function () {
		var result = output('engineer', 0, 2)
		result.should.be.equal('身為一個engineer, 加個按鈕, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(0), phrase(3)', function () {
		var result = output('engineer', 0, 3)
		result.should.be.equal('身為一個engineer, 加個按鈕, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(1), phrase(0)', function () {
		var result = output('engineer', 1, 0)
		result.should.be.equal('身為一個engineer, 加新功能, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(1), phrase(1)', function () {
		var result = output('engineer', 1, 1)
		result.should.be.equal('身為一個engineer, 加新功能, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(1), phrase(2)', function () {
		var result = output('engineer', 1, 2)
		result.should.be.equal('身為一個engineer, 加新功能, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(1), phrase(3)', function () {
		var result = output('engineer', 1, 3)
		result.should.be.equal('身為一個engineer, 加新功能, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(2), phrase(0)', function () {
		var result = output('engineer', 2, 0)
		result.should.be.equal('身為一個engineer, 切個版, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(2), phrase(1)', function () {
		var result = output('engineer', 2, 1)
		result.should.be.equal('身為一個engineer, 切個版, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(2), phrase(2)', function () {
		var result = output('engineer', 2, 2)
		result.should.be.equal('身為一個engineer, 切個版, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(2), phrase(3)', function () {
		var result = output('engineer', 2, 3)
		result.should.be.equal('身為一個engineer, 切個版, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(3), phrase(0)', function () {
		var result = output('engineer', 3, 0)
		result.should.be.equal('身為一個engineer, 改一點 code, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(3), phrase(1)', function () {
		var result = output('engineer', 3, 1)
		result.should.be.equal('身為一個engineer, 改一點 code, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(3), phrase(2)', function () {
		var result = output('engineer', 3, 2)
		result.should.be.equal('身為一個engineer, 改一點 code, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select engineer, task(3), phrase(3)', function () {
		var result = output('engineer', 3, 3)
		result.should.be.equal('身為一個engineer, 改一點 code, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	

	//designer
	it('select designer, task(0), phrase(0)', function () {
		var result = output('designer', 0, 0)
		result.should.be.equal('身為一個designer, 畫一張圖, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(0), phrase(1)', function () {
		var result = output('designer', 0, 1)
		result.should.be.equal('身為一個designer, 畫一張圖, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(0), phrase(2)', function () {
		var result = output('designer', 0, 2)
		result.should.be.equal('身為一個designer, 畫一張圖, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(0), phrase(3)', function () {
		var result = output('designer', 0, 3)
		result.should.be.equal('身為一個designer, 畫一張圖, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(1), phrase(0)', function () {
		var result = output('designer', 1, 0)
		result.should.be.equal('身為一個designer, 改個 logo, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(1), phrase(1)', function () {
		var result = output('designer', 1, 1)
		result.should.be.equal('身為一個designer, 改個 logo, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(1), phrase(2)', function () {
		var result = output('designer', 1, 2)
		result.should.be.equal('身為一個designer, 改個 logo, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(1), phrase(3)', function () {
		var result = output('designer', 1, 3)
		result.should.be.equal('身為一個designer, 改個 logo, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(2), phrase(0)', function () {
		var result = output('designer', 2, 0)
		result.should.be.equal('身為一個designer, 順便幫忙設計一下, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(2), phrase(1)', function () {
		var result = output('designer', 2, 1)
		result.should.be.equal('身為一個designer, 順便幫忙設計一下, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(2), phrase(2)', function () {
		var result = output('designer', 2, 2)
		result.should.be.equal('身為一個designer, 順便幫忙設計一下, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(2), phrase(3)', function () {
		var result = output('designer', 2, 3)
		result.should.be.equal('身為一個designer, 順便幫忙設計一下, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(3), phrase(0)', function () {
		var result = output('designer', 3, 0)
		result.should.be.equal('身為一個designer, 隨便換個設計, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('selectdesigner, task(3), phrase(1)', function () {
		var result = output('designer', 3, 1)
		result.should.be.equal('身為一個designer, 隨便換個設計, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(3), phrase(2)', function () {
		var result = output('designer', 3, 2)
		result.should.be.equal('身為一個designer, 隨便換個設計, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select designer, task(3), phrase(3)', function () {
		var result = output('designer', 3, 3)
		result.should.be.equal('身為一個designer, 隨便換個設計, 很正常.....(ノ-_-)ノ~┻━┻')
	})


	//entrepreneur

	it('select entrepreneur, task(0), phrase(0)', function () {
		var result = output('entrepreneur', 0, 0)
		result.should.be.equal('身為一個entrepreneur, 週末加班, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(0), phrase(1)', function () {
		var result = output('entrepreneur', 0, 1)
		result.should.be.equal('身為一個entrepreneur, 週末加班, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(0), phrase(2)', function () {
		var result = output('entrepreneur', 0, 2)
		result.should.be.equal('身為一個entrepreneur, 週末加班, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(0), phrase(3)', function () {
		var result = output('entrepreneur', 0, 3)
		result.should.be.equal('身為一個entrepreneur, 週末加班, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(1), phrase(0)', function () {
		var result = output('entrepreneur', 1, 0)
		result.should.be.equal('身為一個entrepreneur, 要能賺錢, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(1), phrase(1)', function () {
		var result = output('entrepreneur', 1, 1)
		result.should.be.equal('身為一個entrepreneur, 要能賺錢, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(1), phrase(2)', function () {
		var result = output('entrepreneur', 1, 2)
		result.should.be.equal('身為一個entrepreneur, 要能賺錢, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(1), phrase(3)', function () {
		var result = output('entrepreneur', 1, 3)
		result.should.be.equal('身為一個entrepreneur, 要能賺錢, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(2), phrase(0)', function () {
		var result = output('entrepreneur', 2, 0)
		result.should.be.equal('身為一個entrepreneur, 想個 business model, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(2), phrase(1)', function () {
		var result = output('entrepreneur', 2, 1)
		result.should.be.equal('身為一個entrepreneur, 想個 business model, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(2), phrase(2)', function () {
		var result = output('entrepreneur', 2, 2)
		result.should.be.equal('身為一個entrepreneur, 想個 business model, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(2), phrase(3)', function () {
		var result = output('entrepreneur', 2, 3)
		result.should.be.equal('身為一個entrepreneur, 想個 business model, 很正常.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(3), phrase(0)', function () {
		var result = output('entrepreneur', 3, 0)
		result.should.be.equal('身為一個entrepreneur, 找 VC 募錢, 很簡單.....(ノ-_-)ノ~┻━┻')
	})
	it('selectentrepreneur, task(3), phrase(1)', function () {
		var result = output('entrepreneur', 3, 1)
		result.should.be.equal('身為一個entrepreneur, 找 VC 募錢, 很容易.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(3), phrase(2)', function () {
		var result = output('entrepreneur', 3, 2)
		result.should.be.equal('身為一個entrepreneur, 找 VC 募錢, 很快.....(ノ-_-)ノ~┻━┻')
	})
	it('select entrepreneur, task(3), phrase(3)', function () {
		var result = output('entrepreneur', 3, 3)
		result.should.be.equal('身為一個entrepreneur, 找 VC 募錢, 很正常.....(ノ-_-)ノ~┻━┻')
	})

	
})

