


// Completed and Tested for the most part
// ? Thoughts for later - no logic implemented
// todo operations that I want in game

// Written Card Ability - Realized
// difficulty heirarchy? 
// ! SELF - COLOR
// ---- INPLAY 
// (onetime) +B if any COLOR or COLOR card is in play (returns one bonus)
// (onetime) +B if any COLOR card is in play
// (multiple) +B for each COLOR or COLOR card in play (returns multiple bonus)
// (multiple) +B for each COLOR card in play
// --- NEIGHBOR 
// (onetime) +B if next to any COLOR or COLOR card
// (onetime) +B if next to any COLOR card
// (multiple) +B for each Neighboring COLOR card
// (multiple) +B for each neighboring COLOR or COLOR cards
// --- Multipliers
// (onetime) xB if any COLOR card is in play
// (onetime) xB if next to any COLOR card
// (multiple) xB for each neighboring COLOR // This is just a pointValue = cardValue +
// (multiple) xB for each COLOR in play
// ! TARGET - COLOR (does not take into consideration the oneShot property)
// ---- INPLAY
// +B to each COLOR card in play
// +B to each COLOR or COLOR card in play
// ---- NEIGHBOR
// +B to each Neighboring COLOR card
// +B to each Neighboring COLOR or COLOR card
// ---- Multipliers
// x2 to each COLOR card in play
// x2 to each COLOR or COLOR card in play
// x2 to each Neighboring COLOR card
// x2 to each Neighboring COLOR or COLOR card
// ! - SELF - CHARACTER
// --- INPLAY
// (onetime) +B if any CHARACTER or CHARACTER are in play (returns one bonus)
// (onetime) +B if any CHARACTER is in play
// (multiple) +B for each CHARACTER or CHARACTER in play (multiple bonus)
// --- NEIGHBOR
// (onetime) +B if next to any CHARACTER or CHARACTER card
// (onetime) +B if next to any CHARACTER
// (multiple) +B for each neighboring CHARACTER or CHARACTER cards
// --- Multipliers
// xB if any CHARACTER is in play
// xB if next to any CHARACTER
// xB for each neighboring CHARACTER or CHARACTER
// ! - TARGET - CHARACTER
// +B TO any CHARACTER in play
// +B TO any CHARACTER or CHARACTER in play
// +B TO any Neighboring CHARACTER
// +B TO each Neighboring CHARACTER OR CHARACTER
// x2 TO any CHARACTER in play
// x2 TO any neighboring CHARACTER
// x2 TO each CHARACTER or CHARACTER in play
// x2 TO each neighboring CHARACTER or CHARACTER
// ! SELF - POINTS
// ---- INPLAY 
// (onetime) +B if any VALUE or VALUE card is in play (returns one bonus)
// (onetime) +B if any VALUE card is in play
// (multiple) +B for each VALUE or VALUE card in play (returns multiple bonus)
// (multiple) +B for each VALUE card in play
// --- NEIGHBOR 
// (onetime) +B if next to any VALUE or VALUE card
// (onetime) +B if next to any VALUE card
// (multiple) +B for each Neighboring VALUE card
// (multiple) +B for each neighboring VALUE or VALUE cards
// --- Multipliers
// (onetime) xB if any VALUE card is in play
// (onetime) xB if next to any VALUE card
// (multiple) xB for each neighboring VALUE
// (multiple) xB for each VALUE in play
// ! TARGET - POINTS
// ---- INPLAY
// +B to each VALUE card in play
// +B to each VALUE or VALUE card in play
// ---- NEIGHBOR
// +B to each Neighboring VALUE card
// +B to each Neighboring VALUE or VALUE card
// ---- Multipliers
// x2 to each VALUE card in play
// x2 to each VALUE or VALUE card in play
// x2 to each Neighboring COLOR card
// x2 to each Neighboring COLOR or COLOR card
// ! SELF - KIND
// ! TARGET - KIND

// double ability.target...
// +4 to all other Female Heroes // double ability.target...
// +2 for each neighboring female animal...
// -2 to all black 10's

// ! ************

// to add ... 
// todo +10 if played as the last card

// targets other cards and conditions a third set of cards...
// ? All villains get +1 for each Prop in play
// ? adjacent cards get -1 for each yellow card in play

// todo +3 for each opponent green card
// todo x5 if the opposite card is purple
// todo -4 to all opponent props
// todo -5 to neighboring and opposite villains
// two locations...


// ! BOARD SETUP Powers... 
// todo treats neighboring cards as green
// todo opposing card loses it's adjacency affects...
// todo treat opposing card as black



// --- I don't think these should be included... they would default to the first color card in the board array...
// ? +B TO any COLOR in play
// ? +B TO any neighboring COLOR
// ? xB to any COLOR in play
// ? xB to any Neighboring COLOR
// ------------
// Other Thoughts
// ? +B if a COLOR and COLOR card are in play
// ? +B if two COLOR cards are in play
// ? +B for each pair of COLOR cards
// ? +B if next to a COLOR and COLOR card
// ? +B if next to two COLOR cards
// ? +B to any COLOR of CHOICE

// These will only exist in special circumstances
// ? (multiple) +B for each CHARACTER in play 
// ? (multiple) +B for each Neighboring CHARACTER card
// ? xB for each CHARACTER in play
// ? xB TO each CHARACTER in play

// ? +B TO any CHARACTER or CHARACTER in play
