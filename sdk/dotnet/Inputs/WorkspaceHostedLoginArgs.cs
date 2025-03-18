// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspaceHostedLoginArgs : global::Pulumi.ResourceArgs
    {
        [Input("allowedRedirectUrls")]
        private InputList<string>? _allowedRedirectUrls;

        /// <summary>
        /// Allowed redirect URLs.
        /// </summary>
        public InputList<string> AllowedRedirectUrls
        {
            get => _allowedRedirectUrls ?? (_allowedRedirectUrls = new InputList<string>());
            set => _allowedRedirectUrls = value;
        }

        public WorkspaceHostedLoginArgs()
        {
        }
        public static new WorkspaceHostedLoginArgs Empty => new WorkspaceHostedLoginArgs();
    }
}
