describe('Tests for the Blackjack.spec.js',() =>{
    describe('Tests for dealerShouldDraw method',() =>{
        describe ('10,9 test case ',() =>{
            it(' should return false',() =>{
                const hand = [
                    {displayVal:'ten', val:10, suit:'hearts'},
                    {displayVal:'nine', val:9, suit:'hearts'}
                ]
                const result = dealerShouldDraw(hand);
                expect(result).toEqual(false);
            });
        })
        describe ('Ace,6 test case ',() =>{
            it(' should return true',() =>{
                const hand = [
                    {displayVal:'Ace', val:11, suit:'hearts'},
                    {displayVal:'six', val:6, suit:'hearts'}
                ]
                const result = dealerShouldDraw(hand);
                expect(result).toEqual(true);
            });
        })
        describe ('10, 6, Ace test case ',() =>{
            it(' should return false',() =>{
                const hand = [
                    {displayVal:'ten', val:10, suit:'hearts'},
                    {displayVal:'six', val:6, suit:'hearts'},
                    {displayVal:'Ace', val:11, suit:'hearts'},
                ]
                const result = dealerShouldDraw(hand);
                expect(result).toEqual(false);
            });
        })
        describe ('2, 4, 2, 5 test case ',() =>{
            it(' should return true',() =>{
                const hand = [
                    {displayVal:'2', val:2, suit:'hearts'},
                    {displayVal:'4', val:4, suit:'hearts'},
                    {displayVal:'2', val:2, suit:'hearts'},
                    {displayVal:'5', val:5, suit:'hearts'}
                ]
                const result = dealerShouldDraw(hand);
                expect(result).toEqual(true);
            });
        })
    })
})