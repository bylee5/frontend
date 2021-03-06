// @flow
import { React, styled } from '@guardian/dotcom-rendering/packages/guui';

const VisuallyHidden = styled('span')({
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    top: '-10px',
    width: '1px',
});

type Props = {
    text: string,
};

export default function({ text }: Props) {
    return <VisuallyHidden>{text}</VisuallyHidden>;
}
