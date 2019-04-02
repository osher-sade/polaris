import { IrrelevantEntitesContainer } from '../../dist/src/common/irrelevant-entites-container';

describe('Adding irrelevants to container', () => {
    test('one query', () => {
        const container = new IrrelevantEntitesContainer();
        const queryName = 'test';
        const expectedResult = { [queryName]: ['123', '234'] };
        container.addIrrelevantEntitiesOfQuery(queryName, expectedResult[queryName]);

        expect(container.irrelevantContainer).toEqual(expectedResult);
    });

    test('multiple queries', () => {
        const container = new IrrelevantEntitesContainer();
        const firstQueryName = 'testOne';
        const secondQueryName = 'testTwo';
        const expectedResult = {
            [firstQueryName]: ['123', '234'],
            [secondQueryName]: ['1232131', '2344232'],
        };
        container.addIrrelevantEntitiesOfQuery(firstQueryName, expectedResult[firstQueryName]);
        container.addIrrelevantEntitiesOfQuery(secondQueryName, expectedResult[secondQueryName]);

        expect(container.irrelevantContainer).toEqual(expectedResult);
    });
});
