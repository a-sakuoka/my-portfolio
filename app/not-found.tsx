import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] px-4 text-center">
            <Image src="/images/macaroni-logo.png" alt="404" width={120} height={120} className="mb-8 opacity-30" />
            <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-gray-600 mb-8">マカロニさんもページを見つけられなかったようです。</p>
            <Link href="/" className="px-8 py-3 bg-[#1a1a1a] text-white rounded-full">トップへ戻る</Link>
        </div>
    );
}