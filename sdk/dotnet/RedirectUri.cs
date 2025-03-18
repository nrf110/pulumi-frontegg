// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg
{
    /// <summary>
    /// Configures a Frontegg Redirect URI.
    /// </summary>
    [FronteggResourceType("frontegg:index/redirectUri:RedirectUri")]
    public partial class RedirectUri : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The redirect URI key.
        /// </summary>
        [Output("key")]
        public Output<string> Key { get; private set; } = null!;

        /// <summary>
        /// The redirect URI.
        /// </summary>
        [Output("redirectUri")]
        public Output<string> uri { get; private set; } = null!;


        /// <summary>
        /// Create a RedirectUri resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RedirectUri(string name, RedirectUriArgs args, CustomResourceOptions? options = null)
            : base("frontegg:index/redirectUri:RedirectUri", name, args ?? new RedirectUriArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RedirectUri(string name, Input<string> id, RedirectUriState? state = null, CustomResourceOptions? options = null)
            : base("frontegg:index/redirectUri:RedirectUri", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RedirectUri resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RedirectUri Get(string name, Input<string> id, RedirectUriState? state = null, CustomResourceOptions? options = null)
        {
            return new RedirectUri(name, id, state, options);
        }
    }

    public sealed class RedirectUriArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The redirect URI.
        /// </summary>
        [Input("redirectUri", required: true)]
        public Input<string> uri { get; set; } = null!;

        public RedirectUriArgs()
        {
        }
        public static new RedirectUriArgs Empty => new RedirectUriArgs();
    }

    public sealed class RedirectUriState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The redirect URI key.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// The redirect URI.
        /// </summary>
        [Input("redirectUri")]
        public Input<string>? uri { get; set; }

        public RedirectUriState()
        {
        }
        public static new RedirectUriState Empty => new RedirectUriState();
    }
}
