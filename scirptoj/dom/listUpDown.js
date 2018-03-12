const initAdjustableList = () => {
    const $ul = $('#adjustable-list')
    $ul.on('click', 'li .up', null, function () {
      const $li = $(this).parent('li')
      const index = $li.index()
      move(index, -1)
    })
    $ul.on('click', 'li .down', null, function () {
      const $li = $(this).parent('li')
      const index = $li.index()
      move(index, 1)
    })
    const move = (index, move) => {
      const newIndex = index + move
      const $moveItem = $ul.find('li').eq(index)
      // throw {message: $ul.find('li').get().length}
      if (newIndex < 0) {
        $ul.append($moveItem)
      } else if (newIndex >= $ul.find('li').get().length) {
        $ul.prepend($moveItem)
      } else {
        const $targetItem = $ul.find('li').eq(newIndex)
        // throw {message: 'fuck' + newIndex + index + move}
        // $moveItem.detach()
        if (move === 1) {
          $targetItem.after($moveItem)
        } else {
          $targetItem.before($moveItem)
        }
      }
    }
  }
  