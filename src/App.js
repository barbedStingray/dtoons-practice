import React, { useState } from 'react'
import './App.css'
import dToons from './characters.js'

// CARD RULES
// a card can NOT be written in a way where it would attack (TO) itself...


// BUCKETS
// bucket rules
// a bucket can NOT BE a KIND // a KIND can NOT BE a BUCKET
// buckets are only allowed to target ONE characteristic, just like any other ability
const animalBucket = ['Bug', 'Dog', 'Lion', 'Bear', 'Gorilla', 'Meerekat', 'Warthog', 'Monkey']
const royaltyBucket = ['King', 'Queen', 'Prince', 'Princess']
const bucketTree = {
  'Animal': animalBucket,
  'Royalty': royaltyBucket,
}


// this is your game board
const locationTree = {
  'INPLAY': { 0: [1, 2, 3], 1: [0, 2, 3], 2: [0, 1, 3], 3: [0, 1, 2] },
  'NEIGHBOR': { 0: [1], 1: [0, 2], 2: [1, 3], 3: [2] },
  // OPPONENT
  // OPPOSITE
}





function App() {

  const [boardSlots, setBoardSlots] = useState([])
  const [deckSlots, setDeckSlots] = useState(dToons)
  const [totalScore, setTotalScore] = useState(0)



  function movedToon(dToon, location) {
    if (location === 'board') {
      setBoardSlots((prevSlots) => [...prevSlots, dToon])
      setDeckSlots(deckSlots.filter((toon) => toon.id !== dToon.id))
    } else {
      setDeckSlots((prevSlots) => [...prevSlots, dToon])
      setBoardSlots(boardSlots.filter((toon) => toon.id !== dToon.id))
    }
  }


  function scoreBoard(boardSlots) {
    const duplicateCharacters = boardSlots.map((toon) => toon.character).filter((character, index, boardCharacters) => boardCharacters.indexOf(character) !== index)
    const scoreCardArray = boardSlots.map((toon, index) => {
      return calculateBonus(toon, index, boardSlots)
    })
    // setTotalScore(scoreCardArray.reduce((sum, x) => sum + x, 0))
    setTotalScore(scoreCardArray)
  }



  function calculateBonus(dToon, index, boardSlots) {
    console.log('checking bonus for', dToon)
    const dToonIndex = index

    // DEFENSE SECTION ***************************************************************************************

    const defendScore = dToon.abilities.filter((ability) => ability.trigger === 'DEFEND')
      .map((ability) => {

        const toonsTargetedByAbility = (locationTree[ability.targetLocation]?.[index] || []).map((x) => boardSlots[x])
          .filter((toon) => {

            if (ability.target.length > 1) { // cross target sorting        
              const conditionsArray = ability.target.map((target, i) => {
                const targetConditionals = bucketTree[ability.targetCondition[i]] || [ability.targetCondition[i]] // account for buckets
                return targetConditionals.some((condition) => condition === toon[target])
              })
              return conditionsArray.every((item) => item === true)
            }
            const targetConditionals = bucketTree[ability.targetCondition] || ability.targetCondition // bucket sorting...
            return targetConditionals.some((condition) => condition === toon[ability.target])
          })

        return toonsTargetedByAbility.length === 0 ?
          0 : (ability.oneShot ? ability.bonus : toonsTargetedByAbility.length * ability.bonus)
      }).reduce((sum, x) => sum + x, 0)


    // ATTACK SECTION ************************************************************************************************

    const attackScore = boardSlots.map((toon, index) => {

      const findAttackCards = toon.abilities.filter((ability) => ability.trigger === 'ATTACK')
      const findLocationCards = findAttackCards.filter((ability) => {
        const newAttackLocations = locationTree[ability.targetLocation][index]
        return newAttackLocations.includes(dToonIndex)
      })
      const satisfyConditionCards = findLocationCards.filter((ability) => {

        if (ability.target.length > 1) { // cross target sorting
          console.log('ability.target.length > 1')
          const conditionsArray = ability.target.map((target, i) => {
            const targetConditionals = bucketTree[ability.targetCondition[i]] || [ability.targetCondition[i]] // account for buckets
            return targetConditionals.some((condition) => [dToon[target]].includes(condition)) // ! will groups follow this, or will they get nested? they get nested in the [...]
          })
          return conditionsArray.every((item) => item === true) // todo .some gives you the OR option
        }
        const targetConditionals = bucketTree[ability.targetCondition] || ability.targetCondition // bucket sorting...
        return targetConditionals.some((condition) => dToon[ability.target].includes(condition))
      })
      return satisfyConditionCards.map((ability) => ability.bonus === 'x' ? dToon.points : ability.bonus).reduce((sum, x) => sum + x, 0)

    }).reduce((sum, x) => sum + x, 0)


    // FINAL RETURN  ************************************************************************************************
    console.log(`FINAL ${dToon.character} total: ${defendScore + attackScore + dToon.points} --- self: ${defendScore} others: ${attackScore}`)
    return dToon.points + defendScore + attackScore
  }





  return (
    <div className="App">


      <div className='gameside'>
        {boardSlots.map((dtoon, i) => (
          <div onClick={() => movedToon(dtoon, 'deck')} className='dToonCard' key={i}>
            <p>{dtoon.character}</p>
            <p>{dtoon.color} {dtoon.points} {dtoon.kind}</p>
            <p>{dtoon.groups}</p>
            {dtoon.abilities.map((ability, i) => (
              <p key={i}>{ability.ability}</p>
            ))}
          </div>
        ))}
      </div>


      <div className='deckside'>
        {deckSlots.map((dtoon, i) => (
          <div onClick={() => movedToon(dtoon, 'board')} className='dToonCard' key={i}>
            <p>{dtoon.character}</p>
            <p>{dtoon.color} {dtoon.points} {dtoon.kind}</p>
            <p>{dtoon.groups}</p>
            {dtoon.abilities.map((ability, i) => (
              <p key={i}>{ability.ability}</p>
            ))}
          </div>
        ))}
      </div>

      <button onClick={() => scoreBoard(boardSlots)}>Score</button>
      <h1>{totalScore}</h1>

    </div>
  );
}

export default App;

