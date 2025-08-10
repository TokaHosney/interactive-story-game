document.addEventListener('DOMContentLoaded', () => {
    const story = {
        'start': {
            text: 'You wake up on a cold stone floor, dust clinging to your skin. A lone shaft of moonlight cuts through the darkness, revealing two massive doors. The left door is vibrant red, pulsing faintly like a heartbeat. The right door is deep blue, its silver carvings shimmering as if alive. Somewhere, far away, something growls. Which door will you choose?',
            choices: [
                { text: 'Go through the red door.', nextSceneId: 'redDoor', buttonClass: 'red-door' },
                { text: 'Go through the blue door.', nextSceneId: 'blueDoor', buttonClass: 'blue-door' }
            ]
        },
        'redDoor': {
            text: 'The red door slams behind you with a deafening bang. The air smells of burning wood, and flickering torches line the hallway. Whispers seem to call your name. On the ground, two keys lie side by side: a tarnished silver key and a glowing golden key.',
            choices: [
                { text: 'Pick up the silver key.', nextSceneId: 'silverKeyPath', buttonClass: 'silver-key' },
                { text: 'Pick up the golden key.', nextSceneId: 'goldenKeyPath', buttonClass: 'gold-key' }
            ]
        },

        'silverKeyPath': {
            text: 'You take the silver key. The whispers grow louder, guiding you to a locked door. The key fits perfectly. Inside is a dusty study with a single candle burning on a desk holding a leather-bound diary.',
            choices: [
                { text: 'Read the diary.', nextSceneId: 'readDiary', buttonClass: 'silver-key' },
                { text: 'Ignore the diary and search the room.', nextSceneId: 'cellarEscape', buttonClass: 'no-trust' }
            ]
        },

        'readDiary': {
            text: 'The diary speaks of a curse: once you enter the house, it marks you. The only escape is through the "River of Stars." The candle flickers and dies, and a hidden passage opens behind a bookshelf.',
            choices: [
                { text: 'Enter the passage.', nextSceneId: 'riverStars', buttonClass: 'trust-fox' },
                { text: 'Stay in the study.', nextSceneId: 'trappedForever', buttonClass: 'no-trust' }
            ]
        },

        'riverStars': {
            text: 'You follow the passage and find an underground river glowing like the night sky. A boat drifts quietly, waiting for you. As you step in, the whispers fade completely. You escaped the curse. You won!',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'trappedForever': {
            text: 'You wait in the study, but nothing changes. Days blur together until you become just another whisper in the house. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'cellarEscape': {
            text: 'You find a cellar door leading outside. You run into the forest, but the whispers follow you in the wind. Did you really win?',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'goldenKeyPath': {
            text: 'The golden key hums with power. The hallway walls glow with strange runes. A hidden door opens to a grand library. The key points toward a spiral staircase leading to a shimmering portal.',
            choices: [
                { text: 'Step into the portal.', nextSceneId: 'secretWin', buttonClass: 'gold-key' },
                { text: 'Ignore the portal and explore the library.', nextSceneId: 'trapRoom', buttonClass: 'no-trust' }
            ]
        },

        'secretWin': {
            text: 'The portal whisks you to a meadow under a sky filled with shooting stars. A warm voice says, "You were always meant to find this place." Secret Ending Unlocked! You won!',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'trapRoom': {
            text: 'You explore further, but the floor collapses beneath you. Darkness swallows you whole. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },
        'blueDoor': {
            text: 'You push the blue door open. A cool breeze greets you as you step into a moonlit garden glowing with flowers that seem to breathe. A twilight-colored fox approaches with a red flower in its mouth, eyes gleaming with intelligence.',
            choices: [
                { text: 'Take the flower from the fox.', nextSceneId: 'takeFlower', buttonClass: 'trust-fox' },
                { text: 'Ignore the fox and wander the garden.', nextSceneId: 'exploreGarden', buttonClass: 'no-trust' }
            ]
        },

        'exploreGarden': {
            text: 'The flowers\' glow intensifies, hypnotizing you. Your memories fade—your name, your purpose—until you become part of the garden itself. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'takeFlower': {
            text: 'The moment you take the flower, the garden shifts—the petals close, the air grows heavy, and a hidden archway of ivy appears. The fox trots toward it, glancing back at you.',
            choices: [
                { text: 'Follow the fox through the archway.', nextSceneId: 'secretArchway', buttonClass: 'trust-fox' },
                { text: 'Stay in the garden.', nextSceneId: 'waitFox', buttonClass: 'no-trust' }
            ]
        },

        'waitFox': {
            text: 'You wait, but the fox slowly fades into the shadows. The archway seals shut, and the garden’s beauty turns cold and lifeless. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'secretArchway': {
            text: 'You step into a crystal tunnel glowing faintly. The fox walks ahead, tail swaying. You hear rushing water and a haunting song echoing through the tunnel.',
            choices: [
                { text: 'Follow the singing.', nextSceneId: 'sirenChamber', buttonClass: 'no-trust' },
                { text: 'Ignore it and stay with the fox.', nextSceneId: 'riverCave', buttonClass: 'trust-fox' }
            ]
        },

        'sirenChamber': {
            text: 'A pale figure rises from a glowing pool, beckoning you. Her beauty is overwhelming, but something feels wrong.',
            choices: [
                { text: 'Approach her.', nextSceneId: 'sirenTrap', buttonClass: 'no-trust' },
                { text: 'Run back to the fox.', nextSceneId: 'riverCave', buttonClass: 'trust-fox' }
            ]
        },

        'sirenTrap': {
            text: 'She smiles, revealing rows of jagged teeth. Water surges around you, pulling you under. Darkness takes you. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'riverCave': {
            text: 'The tunnel opens to an underground river shimmering like the night sky. A wooden boat waits. The fox jumps in, motioning for you to join.',
            choices: [
                { text: 'Join the fox in the boat.', nextSceneId: 'trustFoxPath', buttonClass: 'trust-fox' },
                { text: 'Explore deeper into the cave.', nextSceneId: 'caveLabyrinth', buttonClass: 'no-trust' }
            ]
        },

        'trustFoxPath': {
            text: 'The boat glides across the glowing water into a vast cavern. The fox transforms into a robed figure who thanks you for your trust. You are guided to freedom. You won!',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        },

        'caveLabyrinth': {
            text: 'You wander deeper into the cave, but the walls shift, trapping you in endless darkness. Game Over.',
            choices: [
                { text: 'Play again?', nextSceneId: 'start', buttonClass: 'play-again' }
            ]
        }
    };

    const storyTextElement = document.getElementById('story-text');
    const choicesContainerElement = document.getElementById('choices-container');

    function showScene(sceneId) {
        const scene = story[sceneId];
        storyTextElement.textContent = scene.text;
        choicesContainerElement.innerHTML = '';
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            if (choice.buttonClass) {
                button.classList.add(choice.buttonClass);
            }
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                showScene(choice.nextSceneId);
            });
            choicesContainerElement.appendChild(button);
        });
    }

    showScene('start');
});
