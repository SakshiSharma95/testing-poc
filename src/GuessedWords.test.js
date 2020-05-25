import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};


/**
 * Function to create a shallow wrapper for GuessedWords component
 * @function setup
 * @param {object} props - component props specific to this component
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps } />)
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
let wrapper;
    beforeEach ( () => {
        wrapper = setup({ guessedWords: []});
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);

    });
    test('renders instructions to guess a word', () => {
        const instruction = findByTestAttr(wrapper, 'guess-instruction');
        expect(instruction.text().length).not.toBe(0);
    });

});

describe('if there are words guessed', () => {

});