import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: '10-reasons-cats-are-better-than-dogs',
    title: '10 Reasons Cats Are Better Than Dogs',
    excerpt:
      'The debate is ancient, but the facts are clear. Here’s why felines are definitively the superior companions.',
    content: `
      <p class="mb-4">The age-old debate of cats versus dogs has passionate supporters on both sides. However, when you look at the evidence, it becomes clear that cats hold a certain edge. Here are ten reasons why cats make better pets than dogs.</p>
      <ol class="list-decimal list-inside space-y-4 mb-4">
        <li><strong>Independence:</strong> Cats are self-sufficient. They don’t need constant attention or walks, making them perfect for busy individuals.</li>
        <li><strong>Cleanliness:</strong> Cats are meticulous groomers. They spend a significant portion of their day cleaning themselves, which means less grooming work for you.</li>
        <li><strong>Quietness:</strong> While dogs can be loud barkers, cats communicate with soft meows and purrs. They are ideal for apartment living.</li>
        <li><strong>Pest Control:</strong> Cats are natural hunters. A cat in the house is an excellent deterrent for mice and other pests.</li>
        <li><strong>Space-Efficient:</strong> Cats don't require a large yard to be happy. They are perfectly content in smaller living spaces.</li>
        <li><strong>They Bathe Themselves:</strong> No need for messy, stressful baths. Cats handle their own hygiene.</li>
        <li><strong>Longer Lifespan:</strong> On average, indoor cats live longer than dogs, giving you more years with your furry friend.</li>
        <li><strong>They're Cheaper:</strong> Generally, the cost of owning a cat—from food to vet bills—is lower than that of a dog.</li>
        <li><strong>They Respect Your Personal Space:</strong> A cat is more likely to curl up nearby than to jump all over you demanding attention.</li>
        <li><strong>The Purr:</strong> A cat's purr is not only calming but has been shown to have therapeutic benefits for humans.</li>
      </ol>
      <p>Ready to join the winning team? <a href="#/" class="text-purple-600 hover:underline font-bold">Cast your vote for Team Cat now!</a></p>
    `,
    images: [
      { src: '/kingcat.jpeg', alt: 'A majestic cat sitting proudly like a king.' },
      { src: '/catvsdog.jpeg', alt: 'Cats facing off against dogs in the ultimate showdown.' }
    ]
  },
  {
    slug: '10-reasons-dogs-are-better-than-cats',
    title: '10 Reasons Dogs Are Better Than Cats',
    excerpt:
      'Let’s be honest, dogs have rightfully earned the title of "man\'s best friend." Here’s the definitive list of why dogs rule.',
    content: `
      <p class="mb-4">While cats have their charms, dogs offer a level of companionship and joy that is simply unmatched. They are not just pets; they are family members. Here are ten solid reasons why dogs are superior to cats.</p>
      <ol class="list-decimal list-inside space-y-4 mb-4">
        <li><strong>Unconditional Love:</strong> A dog's excitement when you come home is pure, unadulterated joy. They love their owners unconditionally.</li>
        <li><strong>They Encourage an Active Lifestyle:</strong> Dogs need walks, runs, and playtime, which gets their owners off the couch and into the fresh air.</li>
        <li><strong>Trainability:</strong> Dogs are eager to please, making them highly trainable. From basic commands to complex tricks, dogs are quick learners.</li>
        <li><strong>They Protect You:</strong> Dogs are natural guardians. Their loyalty means they will protect their family and home from intruders.</li>
        <li><strong>Social Companions:</strong> Dogs make it easy to meet new people. A trip to the dog park can be a social event for both you and your pet.</li>
        <li><strong>They're Great with Kids:</strong> A well-trained dog can be a child's best friend, playmate, and protector.</li>
        <li><strong>Variety of Breeds:</strong> From a tiny Chihuahua to a giant Great Dane, there is a dog breed to fit every personality and lifestyle.</li>
        <li><strong>They Show Their Emotions:</strong> You never have to guess what a dog is feeling. Their emotions are written all over their happy, wagging tails.</li>
        <li><strong>Adventure Buddies:</strong> Dogs are always up for an adventure, whether it's a hike in the mountains or a swim at the beach.</li>
        <li><strong>They Can Save Lives:</strong> From search and rescue to medical alert dogs, their abilities are truly heroic.</li>
      </ol>
      <p>Convinced that dogs are the best? <a href="#/" class="text-orange-600 hover:underline font-bold">Vote for Team Dog and prove it!</a></p>
    `,
    images: [
      { src: '/kingdog.jpeg', alt: 'A powerful dog standing tall like a king.' },
      { src: '/catvsdog.jpeg', alt: 'Dogs and cats competing for the crown.' }
    ]
  },
  {
    slug: 'history-of-cats-vs-dogs-debate',
    title: 'The History of the Cats vs Dogs Debate',
    excerpt:
      "This isn't a new argument. We delve into the historical, cultural, and scientific roots of this timeless rivalry.",
    content: `
      <p class="mb-4">The rivalry between cat people and dog people is more than just a modern internet meme; it's a debate with deep historical and cultural roots. For millennia, these two species have lived alongside humans, playing very different roles in our societies.</p>
      <h3 class="text-2xl font-bold mt-6 mb-2">Ancient Roles</h3>
      <p class="mb-4">Dogs were domesticated much earlier than cats, primarily for hunting and protection. They were partners in survival. Cats, on the other hand, domesticated themselves, drawn to human settlements by the pests that infested grain stores. They were useful, but on their own terms.</p>
      <h3 class="text-2xl font-bold mt-6 mb-2">Cultural Perceptions</h3>
      <p class="mb-4">In Ancient Egypt, cats were revered and even worshipped as divine beings. In contrast, during the Middle Ages in Europe, they were often associated with witchcraft and evil. Dogs, however, have almost universally been seen as symbols of loyalty and fidelity.</p>
      <p>This long history has shaped our modern perceptions and continues to fuel the debate. Which side are you on? <a href="#/" class="text-green-600 hover:underline font-bold">Make your voice heard on the homepage!</a></p>
    `,
    images: [
      { src: '/catvsdog.jpeg', alt: 'An artistic representation of the cats vs dogs rivalry.' },
      { src: '/kingcat.jpeg', alt: 'Ancient-style artwork of a revered cat.' }
    ]
  }
];
