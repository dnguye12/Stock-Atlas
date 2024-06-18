import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@/lib/icons'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" w-full">
            <div className="divider"></div> 
            <div className="content container mx-auto flex flex-col p-4">
                <div className="copyright mb-4 text-center md:text-start flex justify-between items-center">
                    <p className=" text-sm flex-1">© { new Date().getFullYear() } StockAtlas. All Rights Reserved.</p>
                    <div className=" flex-1 flex justify-end">
                        <a href="https://discord.com/channels/@me" target="_blank"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                    </div>
                </div>
                <div className="disclaimer">
                    <p className="text-sm"><span className="text-md underline text-white font-semibold">IMPORTANT DISCLAIMER:</span> All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;