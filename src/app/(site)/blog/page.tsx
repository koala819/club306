import { Blog } from '@/src/components/Blog';
import { getAllArticles } from '@/src/lib/blog/services';

export default async function Handle() {
  try {
    const articles = await getAllArticles();

    if (!articles || articles.length === 0) {
      return (
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Aucun article trouvé</h1>
          <p className="text-gray-600">
            Il n'y a pas encore d'articles publiés. Créez-en un depuis{' '}
            <a href="/studio" className="text-blue-500 hover:underline">
              Sanity Studio
            </a>
            .
          </p>
        </div>
      );
    }

    return <Blog articles={articles} />;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return (
      <div className="container px-5 py-24 mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Erreur</h1>
        <p className="text-gray-600">
          Une erreur est survenue lors du chargement des articles.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Vérifiez votre configuration Sanity dans les variables d'environnement.
        </p>
      </div>
    );
  }
}
