'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

const contactFormSchema = z.object({
    name: z.string().min(1, { message: 'お名前を入力してください' }),
    email: z.string().email({ message: '正しいメールアドレスを入力してください' }),
    category: z.enum(['開発の相談', '既存システムの改修', 'その他'], {
        message: 'お問い合わせ内容を選択してください',
    }),
    productType: z.enum(
        ['Webシステム', 'ホームページ', 'LP', 'スマホアプリ', '業務効率化ツール', '未定'],
        { message: '必要なモノを選択してください' }
    ),
    target: z.string().min(1, { message: 'ターゲット層を入力してください' }),
    issues: z.string().min(1, { message: '現状の課題・悩みを入力してください' }),
    overview: z.string().min(1, { message: 'プロジェクト概要を入力してください' }),
    budget: z.enum(
        ['〜30万円', '30〜100万円', '100〜300万円', '300万円〜', '未定'],
        { message: 'ご予算感を選択してください' }
    ),
    deadline: z.string().optional(),
    reference: z.string().optional(),
    source: z.enum(
        ['Google検索', 'note', 'MENTA', 'X (Twitter)', '知人の紹介', 'その他'],
        { message: 'きっかけを選択してください' }
    ),
    sourceDetails: z.string().optional(),
    portfolio: z.enum(['可', '不可', '要相談'], {
        message: '実績公開について選択してください',
    }),
}).refine((data) => {
    if ((data.source === '知人の紹介' || data.source === 'その他') && !data.sourceDetails) {
        return false;
    }
    return true;
}, {
    message: '詳細を入力してください',
    path: ['sourceDetails'],
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            deadline: '',
            reference: '',
            sourceDetails: '',
        },
    });

    const sourceValue = watch('source');

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_GAS_API_URL || '', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('送信に失敗しました');
            }

            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error(err);
            setError('送信中にエラーが発生しました。時間をおいて再度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center min-h-[50vh] text-center"
            >
                <h2 className="text-2xl md:text-3xl font-medium mb-4">お問い合わせありがとうございます</h2>
                <p className="text-[#1a1a1a]/70 text-sm md:text-base leading-relaxed">
                    内容を確認の上、通常2営業日以内にご連絡させていただきます。<br />
                    万が一連絡がない場合は、お手数ですが再度お問い合わせください。
                </p>
                <a
                    href="/"
                    className="mt-8 inline-block border border-[#1a1a1a] px-8 py-3 text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                    トップページへ戻る
                </a>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight">Contact</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                {error && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-sm">
                        {error}
                    </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">お名前 <span className="text-red-500">*</span></label>
                    <input
                        {...register('name')}
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                        placeholder="山田 太郎"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">メールアドレス <span className="text-red-500">*</span></label>
                    <input
                        {...register('email')}
                        type="email"
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                        placeholder="taro.yamada@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                {/* Category */}
                <div className="flex flex-col gap-4">
                    <label className="text-sm font-medium">お問い合わせ内容 <span className="text-red-500">*</span></label>
                    <div className="flex flex-col gap-3">
                        {['開発の相談', '既存システムの改修', 'その他'].map((val) => (
                            <label key={val} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    value={val}
                                    {...register('category')}
                                    className="hidden"
                                />
                                <div className={`w-4 h-4 rounded-full border border-[#1a1a1a]/40 flex items-center justify-center peer-checked:border-[#1a1a1a] ${watch('category') === val ? 'border-[#1a1a1a]' : ''}`}>
                                    {watch('category') === val && <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />}
                                </div>
                                <span className="text-sm group-hover:opacity-70 transition-opacity">{val}</span>
                            </label>
                        ))}
                    </div>
                    {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                </div>

                {/* Product Type */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">必要なモノ <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select
                            {...register('productType')}
                            className="w-full appearance-none bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 pr-8 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none cursor-pointer"
                        >
                            <option value="" disabled hidden>選択してください</option>
                            {['Webシステム', 'ホームページ', 'LP', 'スマホアプリ', '業務効率化ツール', '未定'].map((val) => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]/50">▼</div>
                    </div>
                    {errors.productType && <p className="text-red-500 text-xs">{errors.productType.message}</p>}
                </div>

                {/* Target */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium focus:text-[#1a1a1a]">ターゲット層 <span className="text-red-500">*</span></label>
                    <p className="text-xs text-[#1a1a1a]/60">誰に向けたサービス・システムですか？</p>
                    <input
                        {...register('target')}
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                        placeholder="例: 30代の主婦、現場の建設作業員、社内の経理担当"
                    />
                    {errors.target && <p className="text-red-500 text-xs">{errors.target.message}</p>}
                </div>

                {/* Issues */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">現状の課題・悩み <span className="text-red-500">*</span></label>
                    <p className="text-xs text-[#1a1a1a]/60">現在どのようなことでお困りですか？</p>
                    <textarea
                        {...register('issues')}
                        rows={4}
                        className="w-full bg-transparent border border-[#1a1a1a]/20 p-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none resize-none"
                        placeholder="例: 手書きの日報管理が大変、既存サイトからの問い合わせが来ない"
                    />
                    {errors.issues && <p className="text-red-500 text-xs">{errors.issues.message}</p>}
                </div>

                {/* Overview */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">プロジェクト概要 <span className="text-red-500">*</span></label>
                    <p className="text-xs text-[#1a1a1a]/60">作りたいもののイメージ・概要</p>
                    <textarea
                        {...register('overview')}
                        rows={4}
                        className="w-full bg-transparent border border-[#1a1a1a]/20 p-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none resize-none"
                        placeholder="例: スマホで完結する日報アプリを作りたい"
                    />
                    {errors.overview && <p className="text-red-500 text-xs">{errors.overview.message}</p>}
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">ご予算感 <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select
                            {...register('budget')}
                            className="w-full appearance-none bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 pr-8 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none cursor-pointer"
                        >
                            <option value="" disabled hidden>選択してください</option>
                            {['〜30万円', '30〜100万円', '100〜300万円', '300万円〜', '未定'].map((val) => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]/50">▼</div>
                    </div>
                    {errors.budget && <p className="text-red-500 text-xs">{errors.budget.message}</p>}
                </div>

                {/* Deadline */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">希望納期 <span className="text-[#1a1a1a]/40 text-xs ml-1">(任意)</span></label>
                    <input
                        {...register('deadline')}
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                        placeholder="例: 2024年10月頃"
                    />
                </div>

                {/* Reference */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">参考URL <span className="text-[#1a1a1a]/40 text-xs ml-1">(任意)</span></label>
                    <input
                        {...register('reference')}
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                        placeholder="https://example.com のようなデザイン"
                    />
                </div>

                {/* Source */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">きっかけ <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select
                            {...register('source')}
                            className="w-full appearance-none bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 pr-8 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none cursor-pointer"
                        >
                            <option value="" disabled hidden>選択してください</option>
                            {['Google検索', 'note', 'MENTA', 'X (Twitter)', '知人の紹介', 'その他'].map((val) => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]/50">▼</div>
                    </div>
                    {errors.source && <p className="text-red-500 text-xs">{errors.source.message}</p>}
                </div>

                {/* Source Details (Conditional) */}
                {(sourceValue === '知人の紹介' || sourceValue === 'その他') && (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            {sourceValue === '知人の紹介' ? '差し支えなければ、紹介者様のお名前を教えてください' : '詳細を教えてください'}
                            <span className="text-red-500"> *</span>
                        </label>
                        <input
                            {...register('sourceDetails')}
                            className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-1 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none"
                            placeholder=""
                        />
                        {errors.sourceDetails && <p className="text-red-500 text-xs">{errors.sourceDetails.message}</p>}
                    </div>
                )}

                {/* Portfolio */}
                <div className="flex flex-col gap-4">
                    <label className="text-sm font-medium">制作実績としてポートフォリオへの掲載は可能ですか？ <span className="text-red-500">*</span></label>
                    <div className="flex flex-col gap-3">
                        {['可', '不可', '要相談'].map((val) => (
                            <label key={val} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    value={val}
                                    {...register('portfolio')}
                                    className="hidden"
                                />
                                <div className={`w-4 h-4 rounded-full border border-[#1a1a1a]/40 flex items-center justify-center peer-checked:border-[#1a1a1a] ${watch('portfolio') === val ? 'border-[#1a1a1a]' : ''}`}>
                                    {watch('portfolio') === val && <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />}
                                </div>
                                <span className="text-sm group-hover:opacity-70 transition-opacity">{val}</span>
                            </label>
                        ))}
                    </div>
                    {errors.portfolio && <p className="text-red-500 text-xs">{errors.portfolio.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-8 flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-12 py-4 bg-[#1a1a1a] text-white font-medium hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
                    >
                        {isSubmitting ? '送信中...' : '送信する'}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
