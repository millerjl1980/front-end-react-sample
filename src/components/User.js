import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export const User = ({ image,  name, bio, followers}) => {
    return (
        <div>
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>
                {bio}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {followers} Friends
            </Card.Content>
        </Card>
        </div>
    )
}
