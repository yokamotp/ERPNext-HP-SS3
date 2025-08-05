import { redirect } from 'next/navigation';
import { getArticles } from '@/lib/notion';

export default async function LatestArticlesPage() {
  try {
    // 記事一覧を取得
    const articles = await getArticles();

    // 記事が存在しない場合はナレッジトップにリダイレクト
    if (!articles || articles.length === 0) {
      redirect('/knowledge');
    }

    // 最新記事（publishDate降順）の1件目を取得
    const latestArticle = articles.sort((a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )[0];

    // 最新記事のスラッグページにリダイレクト
    redirect(`/knowledge/${latestArticle.slug}`);

  } catch (error) {
    console.error('Error in latest articles page:', error);
    // エラーが発生した場合もナレッジトップにリダイレクト
    redirect('/knowledge');
  }
} 